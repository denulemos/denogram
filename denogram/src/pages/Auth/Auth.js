import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import denogram from "../../assets/png/denogram.png";
import RegisterForm from "../../components/Auth/RegisterForm";

import "./Auth.scss";

const className = "auth-screen";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className={`${className}__container`}>
      <Image src={denogram} className={`${className}__logo`} />

      <div className={`${className}__form`}>
          {showLogin ? (<p>Welcome back!</p>) : (<RegisterForm setShowLogin={setShowLogin}/>)}
      </div>

      <div className={`${className}__change-form`}>
        <p>
          {showLogin ? (
            <p className={`${className}__change-form-label`}>
              Don't have an account? <span onClick={() => setShowLogin(false)}>Register</span>
            </p>
          ) : (
            <p className={`${className}__change-form-label`}>
              Already a member? <span onClick={() => setShowLogin(true)}>Log in</span>
            </p>
          )}
        </p>
      </div>
    </Container>
  );
};

export default Auth;
