import React from "react";
import "./Header.scss";
import { Container, Grid, Image } from "semantic-ui-react";
import Logo from "../../assets/png/denogram.png";
import {Link} from 'react-router-dom';
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className="header__logo">
              <Link to="/">  <Image src={Logo} alt="logo" /> </Link>
          
          </Grid.Column>
          <Grid.Column width={10} className="header__menu">
            <p>buscador</p>
          </Grid.Column>
          <Grid.Column width={3}>
           <RightHeader/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
