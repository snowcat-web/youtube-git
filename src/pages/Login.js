import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.cancel ? "royalblue" : "white"};
  color: ${props => props.cancel ? "white" : "royalblue"};

  font-size: 1em;
  margin: 1em;
  /*padding: 0.25em 1em;*/
  border: 2px solid royalblue;
  border-radius: 3px;
`;

const Buttons = styled.div`    
    display:flex;

`;

const LogoContainer = styled.div`
display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; // 100% view height
width: 100vw; // 100% view width
position: absolute; // so it goes behind the current content
`;

const Screen = styled.div`
  /* all declarations will be prefixed */  
  background: papayawhip;    
  height:100%;
  width:100%;
  position:absolute;  
  `;

  export const LandingBackground = styled("div")`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg");
    background-position: 10% 50%;
    background-size: cover;
    border-bottom: grey 1px solid;
    height: 100%;
`;

const Login = (props) => {
  return (
    <Screen>
      <LogoContainer>
        <Button>Login</Button>
        <Button cancel>Cancel</Button>
      </LogoContainer>
    </Screen>
  );
};

export default Login;