import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar';
import styled from 'styled-components';
import homePage from '../images/homepage10.jpg';
import mobilePage from '../images/mobilepage.jpg';


const Background = styled.div`
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    



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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            
}
`;

const Tagline = styled.h2`

text-align: center;
margin: 0;
align-items: center;
position: relative;
top: 25%
right: 100%;
height:10%;
width: 300%;
font-size: 50px;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

@media only screen and (max-width: 1024px) {

    text-align: center;
    text-overflow: ellipsis;
    align-items: center;
    position: relative;
    margin: 0;
    right: 100%;
    top: 20%;
    font-size: 18px;
    margin-bottom: 30%;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`;

const Button = styled.div`

text-align: center;  
align-items: center;
margin: 0;
position: relative;
padding-top: 20%;

@media only screen and (max-width: 1024px) {
    text-align: center;  
    align-items: center;
    margin: 0;
    position: relative;
    top: 5%;
}

`;


var buttonStyle = {
    
    width: '18rem',
    height: '3.25rem',
    border: '2px solid',
    borderColor: 'white',
    padding: '2%',
    
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
            <Background>
         <header>
            <MuiThemeProvider>
            <NavBar />
            </MuiThemeProvider>
        </header>

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
          </Background>
          
        </ div>
        );
    }
}

export default Homepage;