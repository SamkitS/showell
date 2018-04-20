import React from 'react';
import CommonBar from './common_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Contact_Banner from '../images/contact_banner.jpg';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Wrapper = styled.div`
html, body {
    height: 100%;
    margin: 0px;
}
`;

const Banner = styled.section`
@media only screen and (max-width: 1400px) {
    background-image: url(${Contact_Banner});
    background-repeat  : no-repeat;
    background-attachment: scroll;
    background-size: 100%;
    height: 25vh;
    width: 110%;
    margin:0;
    padding:0;
    right: 10px;
    position: relative;
    top: 51px;
    z-index: -1;
    

    >h1 {
        text-align: center;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 8vw;
        color: white;
        position: absolute;
        width: 100%;
        margin: auto;
        // padding-left: 10%;
        padding-top: 9vh;
        display: block;
    }

}

@media only screen and (min-width: 1400px) {
    background-image: url(${Contact_Banner});
    background-repeat  : no-repeat;
    background-attachment: scroll;
    background-size: 100%;
    height: 50vh;
    width: 100%;
    margin:0;
    padding:0;
    right: 10px;
    position: relative;
    top: 51px;
    
    

    >h1 {
        text-align: center;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 10vw;
        color: white;
        position: absolute;
        padding-top: 12vh;
        padding-left: 25%;
        margin: 0;
        display: block;
    }
}


`;

const PleaseFill = styled.h2`
position: relative;
text-align: center;
align-items: center;
font-size: 4vw;
color: black;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
marrgin:0;
padding-top: 5vh;

`;

const Fields = styled.div`
position: relative;
align-items: center;
margin: 50px;
`;

const Button = styled.div`

text-align: center;  
align-items: center;
margin: 0;
position: relative;
`;

var labelStyle = {
    fontSize: '20px',
    color: 'white', 
    fontWeight: 'bold', 
    top: '25%',
    position: 'relative'
}



class Contact extends React.Component {
    render () {
        return (
        <Wrapper >
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <header>
            
            <CommonBar />
            
            </header>
            <Banner>
             <h1> Contact Us </h1>
            </Banner>
            <PleaseFill> Let's do business together! Send us a Message.   </PleaseFill>
            <Fields>
            
            <TextField
            floatingLabelText="Please enter your full name"
            hintText = "Full Name"
            fullWidth={true}
            type = "text"
             />
             <br/>
             <TextField
            floatingLabelText="Please enter your contact number"
            hintText = "Number"
            fullWidth={true}
            type = "number"
            
             />
             <br/>
             <TextField
            floatingLabelText="Please enter your email id"
            hintText = "Email Id"
            fullWidth={true}
            
            
             />
             <br/>
             <TextField
            floatingLabelText="Enter your message"
            hintText = "Message Body"
            multiLine={true}
            rows ={5}
            fullWidth={true}
            
             />
             <br/>
             <br/>
             <br/>
             <Button>
            <RaisedButton label="Send" primary={true} style = {{ width: '16rem', height: '3.25rem'}} labelStyle = {labelStyle} />
            </Button>
            
            
            </ Fields>
            </ MuiThemeProvider>
        </ Wrapper>
        );
    }
}

export default Contact;