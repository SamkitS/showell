import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar';
import styled, { keyframes } from 'styled-components';
import homePage from '../images/homepage10.jpg';
import mobilePage from '../images/mobilepage.jpg';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const backgroundAnimation = keyframes`

    0% {
        -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
        -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
    }
    100% {
        -webkit-transform: scale(1.25) translateX(20px);
            transform: scale(1.25) translateX(20px);
        -webkit-transform-origin: right;
            transform-origin: right;
    }
  
`;
//check out animista.net for the above code.


const Background = styled.div` /*  */
background-image: url(${homePage});
background-repeat  : no-repeat;
background-position: center center;
background-size: cover;
width: 100%;
height: 100%;
position: fixed;
display: block;
top: 0;
left: 0;
animation: ${backgroundAnimation} 15s linear 3s infinite alternate both;




@media only screen and (max-width: 1024px) {
    background-image: url(${mobilePage});
    background-repeat  : no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
	animation: ${backgroundAnimation} 15s linear 3s infinite alternate both;
} 
`;

const Homepro = styled.h1`
    text-align: center;
    text-shadow: 2px 4px 10px grey;
    text-overflow: ellipsis;
    margin: 0;
    align-items: center;
    position: relative;
    top: 25%;
    font-size: 80px;
    color: white;
    font-family: 'Roboto', sans-serif;
    animation: 3s ${fadeInUpAnimation};
    padding-top: 12%;



@media only screen and (max-width: 1024px) {
    
        text-align: center;
            text-shadow: 2px 4px 10px grey;
            text-overflow: ellipsis;
            margin: 0;
            align-items: center;
            position: relative;
            top: 20%;
            font-size: 60px;
            color: black;
            font-family: 'Roboto', sans-serif;
            animation: 3s ${fadeInUpAnimation};
            padding-top: 25%;
}
`;

const Tagline = styled.h2`

text-align: center;
margin: 0;
align-items: center;
position: relative;
top: 30%
right: 100%;
height:10%;
width: 300%;
font-size: 50px;
color: white;
font-family: 'Roboto', sans-serif;
animation: 3s ${fadeInUpAnimation};

@media only screen and (max-width: 1024px) {

    text-align: center;
    text-overflow: ellipsis;
    align-items: center;
    position: relative;
    margin: 0;
    right: 100%;
    top: 30%;
    font-size: 18px;
    margin-bottom: 30%;
    color: black;
    font-family: 'Roboto', sans-serif;
    animation: 3s ${fadeInUpAnimation};
}
`;

const Button = styled.div`

text-align: center;  
align-items: center;
margin: 0;
position: relative;
padding-top: 10%;

@media only screen and (max-width: 1024px) {
    text-align: center;  
    align-items: center;
    margin: 0;
    position: relative;
    top: 0%;
}

`;


var buttonStyle = {
    
    width: '18rem',
    height: '3.25rem',
    // border: '2px solid',
    // borderColor: 'white',
    padding: '2%',
    boxShadow: '0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19)',
    
}

var labelStyle = {
    
    fontSize: '20px',
    color: 'white',
    fontWeight: 'bold',
    
}

class Homepage extends React.Component {
    render () {
        return (
        <div>
        <header>
            <MuiThemeProvider>
            <NavBar />
            </MuiThemeProvider>
        </header>

            <Background>
            </Background>

        <Homepro>Home-Pro</Homepro>
        <Tagline>Stainless Steel Kitchen Appliances </Tagline>
        <Button >
        <MuiThemeProvider>
            
                 <RaisedButton label= 'Our Products' buttonStyle = {buttonStyle} labelStyle = {labelStyle} backgroundColor = 'lightBlue' href = '/list'/>
                
                 </MuiThemeProvider>         
                <br/>
                 <br/>
        <MuiThemeProvider>
                 <RaisedButton label= 'Contact Us' buttonStyle = {buttonStyle} labelStyle = {labelStyle}  backgroundColor = 'orange' href = '/contactus'/>
        </MuiThemeProvider>
        </Button>
        
          
          
        </ div>
        );
    }
}

export default Homepage;