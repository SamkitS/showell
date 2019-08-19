import React from 'react';
import styled, {keyframes} from 'styled-components';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FileProcessor from 'react-file-processor';
import ChipInput from 'material-ui-chip-input'
import Dropzone from 'react-dropzone'
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;


const AddProducts = styled.div`
height: 150px;
width:300px;
background: #A770EF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
font-family: 'Roboto', sans-serif;
font-size: 150%;
box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19);
text-align: center;
text-decoration: none;
padding: 18%;
color: white;
cursor: pointer;
opacity: 0.8;
border-radius: 5px;
margin-top: 10%;
animation: 2s ${fadeInUpAnimation};
`;

const GoogleAnalytics = styled.div`
height: 150px;
width:300px;
font-family: 'Roboto', sans-serif;
font-size: 150%;
box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19);
text-align: center;
text-decoration: none;
padding: 18%;
color: white;
cursor: pointer;
opacity: 0.8;
border-radius: 5px;
background: #ff00cc;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #333399, #ff00cc);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #333399, #ff00cc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
margin-top: 10%;
animation: 2s ${fadeInUpAnimation};
`;

const ManageProducts = styled.div`
height: 150px;
width:300px;
font-family: 'Roboto', sans-serif;
font-size: 150%;
box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19);
text-align: center;
text-decoration: none;
padding: 18%;
color: white;
cursor: pointer;
opacity: 0.8;
border-radius: 5px;
background: #00F260;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
margin-top: 10%;
animation: 2s ${fadeInUpAnimation};
`;

const Message = styled.div`
height: 150px;
width:300px;
font-family: 'Roboto', sans-serif;
font-size: 150%;
box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19);
text-align: center;
text-decoration: none;
padding: 18%;
color: white;
cursor: pointer;
opacity: 0.8;
border-radius: 5px;
background: #CC95C0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
margin-top: 10%;
animation: 2s ${fadeInUpAnimation};
`;

const FirstHeading = styled.h1`
font-family: 'Roboto', sans-serif;
text-shadow: 2px 4px 10px grey;
font-size: 250%;
color: black;
padding-top: 20%;
display: flex;
text-align: center;  
align-items: center;
animation: 2s ${fadeInUpAnimation};
`;

const LogoutButton = styled.button`
background: #ee0979;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color:  white;
text-align: center;
text-decoration: none;
// display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 30px;
box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 50px 0 rgba(0, 0, 0, 0.19);
width: 18rem;
height: 3.25rem;
font-family: 'Roboto', sans-serif;
font-size: 200%;
margin-top: 50%;
animation: 2s ${fadeInUpAnimation};
  `;



class Manage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          chips: [],
          imageFiles:[],
          open: false,
          
        }
      }
    
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

      handleDrop = (imageFiles) => {
        this.setState({
            imageFiles: imageFiles
            
        })
        console.log(imageFiles); 
      }

      handleRequestAdd (...chips) {
        this.setState({
          chips: [...this.state.chips, ...chips]
        })
      }
    
      handleRequestDelete (deletedChip) {
        this.setState({
          chips: this.state.chips.filter((c) => c !== deletedChip)
        })
      }
    

    render () {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Add"
              primary={true}
              onClick={this.handleClose}
            />,
          ];

         

        return (
        <div>
            <div className='container .container-fluid'>
            <div className='row justify-content-md-center'>
            <div className='.col-md .col-sm mx-auto'>
            <FirstHeading> Admin Panel </FirstHeading>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='row justify-content-md-center '>
            <div className='.col-md-6 .col-sm-6 .col-lg-6 .col-xl-6 mx-auto  '>
            <AddProducts onClick={this.handleOpen}>
            Add a Product
            <MuiThemeProvider >
            <Dialog
                title="Add product details"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                >
                <TextField
                hintText="Enter the Product Name"
                floatingLabelText="Product Name"
                />
                <br/>
                <TextField
                hintText="Enter short product Description"
                floatingLabelText="Product Description"
                multiLine={true}
                rows={3}
                />
                <br />
               <TextField
               hintText="Red"
               floatingLabelText="Colour of the Product"
               floatingLabelFixed={true}
               /><br />
                
                <br />
                <br />
                

                <Dropzone 
                onDrop={this.handleDrop.bind(this)} 
                multiple= {true}
                accept="image/*" 
                >
                
                Click here or Drag and drop to Upload Images

                </Dropzone>
                
                <br />
                
            
                
                {this.state.imageFiles.map((File) => <img src={File.preview} key= {File.name} width={80} height={80} alt='uploaded'/> )}
                
                
                
                

                <ChipInput
                
                hintText='Enter Sizes'

                onPaste={(event) => {
                    const clipboardText = event.clipboardData.getData('Text')
          
                    event.preventDefault()
          
                    this.handleAddChip(...clipboardText.split('\n').filter((t) => t.length > 0))
          
                    if (this.props.onPaste) {
                      this.props.onPaste(event)
                    }
                  }}
          
        
                value={this.state.chips}
                onRequestAdd={(chip) => this.handleRequestAdd(chip)}
                onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip)}
                fullWidth= {true}
                />
                
            </Dialog>
            </ MuiThemeProvider>
            </ AddProducts>
            </div>
            <div className='.col-md-6 .col-sm-6 .col-lg-6 .col-xl-6   mx-auto '>
            <Message> Check Messages </Message>
            </div>
            </div>
            
            <div className='row justify-content-md-center '>
            <div className='.col-md-6 .col-sm-6 .col-lg-6 .col-xl-6 mx-auto'>
            <ManageProducts> Manage Products </ManageProducts>
            </div>
            <div className='.col-md-6 .col-sm-6 .col-lg-6 .col-xl-6 mx-auto'>
            <GoogleAnalytics> Google Analytics </GoogleAnalytics>
            </div>
        
            </div>
            <footer className="footer row justify-content-md-center ">
             <div className='.col-md .col-sm mx-auto'>
                      <LogoutButton> Logout </LogoutButton>   
                    </div>
             </footer>
            </div>

            
        </div>
        );
    }
}

export default Manage;