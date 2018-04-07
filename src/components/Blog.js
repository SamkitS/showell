import React from 'react';
import CommonBar from './common_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Blog extends React.Component {
    render () {
        return (
        <div>
            <header>
            <MuiThemeProvider>
            <CommonBar />
            </MuiThemeProvider>
            </header>
           blog will go here!!
        </ div>
        );
    }
}

export default Blog;