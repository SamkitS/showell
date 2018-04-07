import React from 'react';
import CommonBar from './common_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Product extends React.Component {
    render () {
        return (
        <div>
            <MuiThemeProvider>
            <CommonBar />
            </MuiThemeProvider>
         Particular products!
         
        </ div>
        );
    }
}

export default Product;