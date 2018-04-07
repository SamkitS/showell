import React from 'react';
import CommonBar from './common_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class About extends React.Component {
    render () {
        return (
        <div>
            <header>
            <MuiThemeProvider>
            <CommonBar />
            </MuiThemeProvider>
            </header>
           AboutUs Page!!
        </ div>
        );
    }
}

export default About;