import React from 'react';
import CommonBar from './common_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style/contactus.css';

class Contact extends React.Component {
    render () {
        return (
        <div >
            <header>
            <MuiThemeProvider>
            <CommonBar />
            </MuiThemeProvider>
            </header>
            <section className = 'banner' >
             <p>Contact Us</p>
            </section>
            <section>
                <h2> Get in touch with us </h2>
            </section>
        </ div>
        );
    }
}

export default Contact;