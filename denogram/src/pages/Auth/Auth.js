import React, {useState} from 'react';
import {Container, Image} from 'semantic-ui-react';
import denogram from '../../assets/png/denogram.png';

import './Auth.scss';

const className = "auth-screen";

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container fluid className={`${className}__container`}>
            <Image src={denogram} className={`${className}__logo`}/>

            <div className={`${className}__form`}>

            </div>

            <div className={`${className}__change-form`}>
                <p>
                    {showLogin ? (<> Don't have an account? <span>Register</span> </>) : (<> Already a member? <span>Log in</span></>)}
                </p>
            </div>
            
        </Container>
    )
}

export default Auth
