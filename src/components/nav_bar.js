import React from 'react';
// import AppBar from 'material-ui/AppBar';
import {grey50, grey900,} from 'material-ui/styles/colors';
// import Homepage from './Homepage';
// import { withRouter } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import MediaQuery from 'react-responsive';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import ActionReorder from 'material-ui/svg-icons/action/reorder';

// import Menu from 'material-ui/svg-icons/navigation/menu'


import {Link} from 'react-router-dom';

const iconStyled = {
    fontSize: '35px',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: '1',
    color: 'white',
}


const iconStyles = {
    fontSize: '35px',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: '1',
    color: 'black',

  };

class NavBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
    handleToggle = () => this.setState({open: !this.state.open});
    
    handleClose = () => this.setState({open: false});

    handleClick = () => {
      this.props.history.push('/');
    }

    
    render(){
    return (
    <div>
    {/* <AppBar
      title="Home-Pro"
      titleStyle ={{color: grey900, textAlign: 'center', cursor: 'pointer'}}
      style={{backgroundColor: grey50}}
      onTitleClick={this.handleClick.bind(this)}
      iconElementLeft={<ActionReorder style={iconStyles}/>}
      //iconStyleLeft={{backgroundColor: 'black'}}
      onLeftIconButtonClick =  {this.handleToggle}
       
    /> */}
    
    <MediaQuery query="(min-device-width: 1024px)"> 
    <FontIcon
    className="material-icons"
    onClick={this.handleToggle}
    hoverColor={grey50}
    style = {iconStyled}
    >
    menu
    </FontIcon>
    </MediaQuery>
    <MediaQuery query="(max-width: 1024px)">  
    <FontIcon
    className="material-icons"
    onClick={this.handleToggle}
    hoverColor={grey50}
    style = {iconStyles}
    >
    menu
    </FontIcon>
    </MediaQuery>

    
    <Drawer 
    docked={false}
    open={this.state.open}
    onRequestChange={(open) => this.setState({open})}
    >
   
          <Link to='/list' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}>
          <MenuItem style = {{marginTop: '90%'}} onClick={this.handleClose}> Products</MenuItem>
          </Link>
          <Link to= '/contactus' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}>
          <MenuItem  onClick={this.handleClose}> Contact Us</MenuItem>
          </Link>
          <Link to= '/aboutus' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}>
          <MenuItem  onClick={this.handleClose}> About Us</MenuItem>
          </Link>
          <Link to= '/blog' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}>
          <MenuItem style = {{marginBottom: '90%'}}  onClick={this.handleClose}>Blog</MenuItem>
          </Link>

        </Drawer>
    </div>
  );
}
}
  
// const   NavBarWithRouter = withRouter(NavBar);
// export default NavBarWithRouter;

export default NavBar;