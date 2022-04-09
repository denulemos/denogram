import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";
import { emailValidator } from "../../../utils/validators";

import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../../gql/user";

import {toast} from 'react-toastify';

const namespace = "register-form";

const RegisterForm = ({ setShowLogin }) => {
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
        Register to unleash your inner photographer!
      </h2>
      <Form className={`${namespace}__form`}>
        <Form.Input
          onChange={(e) => handleChange(e, "name")}
          type="text"
          value={formData.name}
          placeholder="Full Name"
          name="name"
          required
        />
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
        <Form.Input
          onChange={(e) => handleChange(e, "confirmPassword")}
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          name="confirmpassword"
          required
        />
        <Button
          type="submit"
          onClick={() => onSubmit()}
          className={`${namespace}__button btn-submit`}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
