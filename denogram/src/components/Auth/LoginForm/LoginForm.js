import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "./LoginForm.scss";
import { emailValidator } from "../../../utils/Validators";

import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../../gql/user";

import {toast} from 'react-toastify';

const namespace = "login-form";

const LoginForm = ({ setShowLogin }) => {
  const [register] = useMutation(REGISTER_USER);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const onSubmit = async() => {
    if (!emailValidator(formData.email)) {
      toast.error('There was an error - Invalid email')
    }
    try {
        const newUser = formData;
        // We delete the confirmPassword field because it is not needed in the mutation
        delete newUser.confirmPassword;

        await register({
            variables: {
                input: newUser,
            }
        });
        toast.success(`Welcome to Denogram ${formData.username}!`);
        setShowLogin(true);
    }
    catch(error) {
      toast.error('There was an error - ' + error.message)
    }
  };

  return (
    <div className={`${namespace}__container`}>
      <h2 className={`${namespace}__title`}>
        Welcome back!
      </h2>
      <Form className={`${namespace}__form`}>
        <Form.Input
          onChange={(e) => handleChange(e, "username")}
          type="text"
          value={formData.username}
          placeholder="Username"
          name="username"
          required
        />
        <Form.Input
          onChange={(e) => handleChange(e, "email")}
          type="email"
          value={formData.email}
          placeholder="Email"
          name="email"
          required
        />
        <Form.Input
          onChange={(e) => handleChange(e, "password")}
          type="password"
          value={formData.password}
          placeholder="Password"
          name="password"
          required
        />
        <Button
          type="submit"
          onClick={() => onSubmit()}
          className={`${namespace}__button btn-submit`}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
