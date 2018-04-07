import React from 'react';
import CommonBar from './common_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class List extends React.Component {
    render () {
        return (
        <div>
            <header>
            <MuiThemeProvider>
            <CommonBar />
            </MuiThemeProvider>
            </header>
            Product Listing Page!!
        </ div>
        );
    }
}

export default List;

