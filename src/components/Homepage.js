import React from 'react';
import  '../style/homepage.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar';


// var divStyle = {
// backgroundImage: `url(${Background})`,
// backgroundRepeat  : 'no-repeat',
// backgroundPosition: 'center',
// backgroundSize: 'cover',
// minHeight: '100%',
// minWidth: '100%',
// maxWidth: '100%',
// width: '100%',
// height: '100%',
// position: 'fixed',
// display: 'flex'

// };

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
            <div className = 'background'>
         <header>
            <MuiThemeProvider>
            <NavBar />
            </MuiThemeProvider>
        </header>

        <h1>Home-Pro</h1>
        <h2>Stainless Steel Kitchen Appliances </h2>
        <div  className = 'button'>
        <MuiThemeProvider>
            
                 <RaisedButton label= 'Our Products' buttonStyle = {buttonStyle} labelStyle = {labelStyle} backgroundColor = 'lightBlue' href = '/list'/>
                
                 </MuiThemeProvider>         
                <br/>
                 <br/>
        <MuiThemeProvider>
                 <RaisedButton label= 'Contact Us' buttonStyle = {buttonStyle} labelStyle = {labelStyle}  backgroundColor = 'orange' href = '/contactus'/>
        </MuiThemeProvider>
        </div>
          </div>
          
        </ div>
        );
    }
}

export default Homepage;