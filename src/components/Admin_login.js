import React from 'react';
import styled, {keyframes} from 'styled-components';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const Background = styled.div`
width: 100vw;
height: 100vh;
background: #24C6DC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #514A9D, #24C6DC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #514A9D, #24C6DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
z-index: 0;
background-size: cover;
`;

const Invite = styled.h1`
font-family: 'Roboto', sans-serif;
text-shadow: 2px 4px 10px grey;
font-size: 250%;
color: white;
// min-height: 20%;  /* Fallback for browsers do NOT support vh unit */
// min-height: 20vh; /* These two lines are counted as one :-)       */
padding-top: 60%;
display: flex;
text-align: center;  
align-items: center;
animation: 3s ${fadeInUpAnimation};
`;

const InviteAdmin = styled.h2`
font-family: 'Roboto', sans-serif;
text-shadow: 2px 4px 10px grey;
font-size: 150%;
color: white;
padding-top: 2%;
text-align: center;  
align-items: center;
animation: 3s ${fadeInUpAnimation};

`;

const styles = {
    errorStyle: {
      color: 'white',
    },
    underlineStyle: {
      borderColor: 'Gold',
    },
    floatingLabelStyle: {
      color: 'white',
    },
    floatingLabelFocusStyle: {
      color: 'white',
    },
    inputStyle : {
        color: 'white',
    },
   
  };

  const Button = styled.button`
  background-color: white; 
  color:  #514a9d;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19);
  width: 18rem;
  height: 3.25rem;
  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  animation: 3s ${fadeInUpAnimation};
  
  `;

class Admin extends React.Component {
    render () {
        return (
     <div>
        <Background>
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div className='.col-md .col-sm mx-auto'>
                        <Invite>Home-Pro</Invite>
                    </div>
                </div>

            <div className='row justify-content-md-center'>
                    <div className=' .col-md .col-sm mx-auto'>
                         <InviteAdmin> Welcome Admin, Please enter your password </ InviteAdmin>
                    </div>
             </div>

             <br />
             <br />
             <br />
            <MuiThemeProvider >
                <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                inputStyle= {styles.inputStyle}
                fullWidth={true}
                />
            </ MuiThemeProvider>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='row justify-content-md-center'>
                    <div className=' .col-md .col-sm mx-auto'>
                    <Button> Enter </Button> 
                    </div>
             </div>
             <footer className="footer fixed-bottom">
             <div className='container .col-md .col-sm mx-auto'>
                         <InviteAdmin> Made by Samkit </ InviteAdmin>
                    </div>
             </footer>
             
             

        </div>
            
        </Background>
    </div>
        );
    }
}

export default Admin;