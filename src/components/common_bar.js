import React from 'react';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import {grey50, grey900,} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

const Head = styled.div`
display: block;
position: fixed;
top:0;
left: 0;
right: 0;
z-index: 100;
overflow: hidden;
`;




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
      <div>
    <Head>
     
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
    </Head>
    </div>
  );
}
}
  
const   CommonBarWithRouter = withRouter(CommonBar);
export default CommonBarWithRouter;

// export default NavBar;