import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";
import { emailValidator } from "../../../utils/Validators";

import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../../gql/user";

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
      alert("email no valido");
    } else if (formData.password !== formData.confirmPassword) {
      alert("passwords no coinciden");
    }
    try {
        const newUser = formData;
        // We delete the confirmPassword field because it is not needed in the mutation
        delete newUser.confirmPassword;

        const result = await register({
            variables: {
                input: newUser,
            }
        });
    }
    catch(error) {
        console.log(error);
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
          placeholder="Full Name"
          name="name"
          required
        />
        <Form.Input
          onChange={(e) => handleChange(e, "username")}
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <Form.Input
          onChange={(e) => handleChange(e, "email")}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <Form.Input
          onChange={(e) => handleChange(e, "password")}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <Form.Input
          onChange={(e) => handleChange(e, "confirmPassword")}
          type="password"
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
