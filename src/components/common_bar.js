import React from 'react';
import AppBar from 'material-ui/AppBar';
import {grey50, grey900,} from 'material-ui/styles/colors';
// import Homepage from './Homepage';
import { withRouter } from 'react-router';
import '../style/nav.css';
// import FontIcon from 'material-ui/FontIcon';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionReorder from 'material-ui/svg-icons/action/reorder';




import {Link} from 'react-router-dom';

const iconStyles = {
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'center',
    zIndex: '1',
    color: 'black',
    alignItems: 'center',
    marginBottom: 'auto',
    marginTop: 'auto',
    top: '5px',

  };

class CommonBar extends React.Component {
    
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
    <div className= 'head'>
     
    <AppBar
      title="Home-Pro"
      titleStyle ={{color: grey900, textAlign: 'center', cursor: 'pointer'}}
      style={{backgroundColor: grey50}}
      onTitleClick={this.handleClick.bind(this)}
      iconElementLeft={<ActionReorder style={iconStyles} hoverColor='white'/>}
      //iconStyleLeft={{backgroundColor: 'black'}}
      onLeftIconButtonClick =  {this.handleToggle}
       
    />
    
    {/* <FontIcon
    className="material-icons"
    onClick={this.handleToggle}
    hoverColor='white'
    style = {iconStyles}
    >
    menu
    </FontIcon> */}

    
    <Drawer 
    docked={false}
    open={this.state.open}
    onRequestChange={(open) => this.setState({open})}
    >
   
          <MenuItem style = {{marginTop: '90%'}} onClick={this.handleClose}> <Link to='/list' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}>Products</Link></MenuItem>
          <MenuItem  onClick={this.handleClose}><Link to= '/contactus' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}> Contact Us</Link></MenuItem>
          <MenuItem  onClick={this.handleClose}><Link to= '/aboutus' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}> About Us</Link></MenuItem>
          <MenuItem style = {{marginBottom: '90%'}}  onClick={this.handleClose}><Link to= '/blog' style={{ textDecoration: 'none', color: grey900, textAlign: 'center' }}>Blog</Link></MenuItem>
        </Drawer>
    </div>
  );
}
}
  
const   CommonBarWithRouter = withRouter(CommonBar);
export default CommonBarWithRouter;

// export default NavBar;