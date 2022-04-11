import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import {toast} from 'react-toastify';
import { useMutation } from "@apollo/client";

import "./LoginForm.scss";

import { emailValidator } from "../../../utils/validators";
import {saveToken, decodeToken} from '../../../utils/token';
import { LOGIN } from "../../../gql/user";
import useAuth from "../../../hooks/useAuth";


const namespace = "login-form";

const LoginForm = () => {
  const [login] = useMutation(LOGIN);

  const {setUser} = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        const result = await login({
            variables: {
                input: formData,
            }
        });
        saveToken(result.data.login.token);
        setUser(decodeToken(result.data.login.token));
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
