import React from 'react';
import CommonBar from './common_bar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled, {keyframes} from 'styled-components';
import Contact_Banner from '../images/contact_banner.jpg';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import InitialMap from './map';
import { fadeInUp } from 'react-animations';


const fadeInUpAnimation = keyframes`${fadeInUp}`;

const Mapnew = styled.div`
@media only screen and (min-width: 800px) {
    z-index = 50;
    height: 45%;
    width: 65%;
    position: absolute;
    padding-top: 15vh;
    padding-left: 20vw;
    margin: 0;

}
@media only screen and (max-width: 800px) {
    z-index = 50;
    height: 40%;
    width: 90%;
    position: absolute;
    padding-top: 2vh;
    padding-left: 5%;
    margin: 0;
}

`;

const ContactFooter = styled.div` 
height: 110vh;
width: 100%;
background: #360033;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position: relative;
z-index: 0;
`;

const Banner = styled.section`
@media only screen and (max-width: 1200px) {
    background-image: url(${Contact_Banner});
    background-repeat  : no-repeat;
    background-attachment: scroll;
    background-size: 100%;
    height: 25vh;
    width: 100%;
    margin:0;
    padding:0;
    // right: 10px;
    position: relative;
    top: 51px;
    z-index: -1;
    display: block;
    

    >h1 {
        text-align: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 8vw;
        color: white;
        position: absolute;
        width: 100%;
        margin: auto;
        // padding-left: 10%;
        padding-top: 9vh;
        display: block;
        animation: 5s ${fadeInUpAnimation};
    }

}

@media only screen and (min-width: 1200px) {
    background-image: url(${Contact_Banner});
    background-repeat  : no-repeat;
    background-attachment: scroll;
    background-size: 100%;
    height: 50vh;
    width: 100%;
    margin:0;
    padding:0;
    // right: 10px;
    position: relative;
    top: 51px;
    display: block;
    
    

    >h1 {
        text-align: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 10vw;
        color: white;
        position: absolute;
        padding-top: 12vh;
        padding-left: 25%;
        margin: 0;
        display: block;
        animation: 5s ${fadeInUpAnimation};
    }
}


`;

const PleaseFill = styled.h2`
position: relative;
text-align: center;
align-items: center;
font-size: 4vw;
color: black;
font-family: 'Roboto', sans-serif;
marrgin:0;
padding-top: 5vh;
animation: 7s ${fadeInUpAnimation};

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
boxShadow: '0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19)',
`;

var labelStyle = {
    fontSize: '20px',
    color: 'white', 
    fontWeight: 'bold', 
    top: '25%',
    position: 'relative'
}

const FooterText = styled.h3`
@media only screen and (min-width: 750px) {
    position: absolute;
    text-align: center;  
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2.5vh;
    color: white;
    padding-top: 75vh;
    padding-left: 42%;
    animation: 3s ${fadeInUpAnimation};

}
@media only screen and (max-width: 800px) {
    position: absolute;
    text-align: center;  
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2.5vh;
    color: white;
    padding-top: 40vh;
    padding-left: 12vw;
    animation: 3s ${fadeInUpAnimation};
}

`;


class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            markers: [{
                position : {
                    lat:19.204729,
                    lng: 72.836778,
                }
            }]
        }
    }


    render () {
        return (
        <div>
            
            <header>

            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <CommonBar />
            </ MuiThemeProvider>
            </header>
            <Banner>
             <h1> Contact Us </h1>
            </Banner>
            <PleaseFill> Lets do business together! Send us a Message.
            
            </PleaseFill>
            <Fields>
            <MuiThemeProvider >
            <TextField
            floatingLabelText="Please enter your full name"
            hintText = "Full Name"
            fullWidth={true}
            type = "text"
             />
            </ MuiThemeProvider>
             <br/>

             <MuiThemeProvider muiTheme={getMuiTheme()}>
             <TextField
            floatingLabelText="Please enter your contact number"
            hintText = "Number"
            fullWidth={true}
            type = "number"
            
             />
             </ MuiThemeProvider>
             <br/>
             <MuiThemeProvider muiTheme={getMuiTheme()}>
             <TextField
            floatingLabelText="Please enter your email id"
            hintText = "Email Id"
            fullWidth={true}
            
            
             />
             </ MuiThemeProvider>
             <br/>
             <MuiThemeProvider muiTheme={getMuiTheme()}>
             <TextField
            floatingLabelText="Enter your message"
            hintText = "Message Body"
            multiLine={true}
            rows ={5}
            fullWidth={true}
            
             />
             </ MuiThemeProvider>
             <br/>
             <br/>
             <br/>
             <Button>
             <MuiThemeProvider muiTheme={getMuiTheme()}>
            <RaisedButton label="Send" primary={true} style = {{ width: '16rem', height: '3.25rem',}} labelStyle = {labelStyle} />
            </ MuiThemeProvider>
            </Button>
            
            
            </ Fields>
            
            <ContactFooter>
                <Mapnew>
                <InitialMap
                containerElement = {
                    <div style = {{height: "100%", }} />
                 }
                mapElement = {
                    <div style = {{height: "100%"}} />

                 }
                markers = {this.state.markers}

                />
                </ Mapnew>
                <br />
                <br />

                <FooterText>
                Office Address : 
                <br />
                26/ Abcd, Govt Industrial Estate, 
                <br />
                Near Hindustan Naka, Charkop, 
                <br />
                Kandivali West, Mumbai - 400067
                <br />
                <br />
                Email id: 
                <br />
                <br />
                business@homeproindia.com
                 </FooterText>

            
                </ContactFooter>
        </ div>
        );
    }
}

export default Contact;



//AIzaSyCZIIwaKOFOp2X86qHwoFFJoAtpy0DFuh4