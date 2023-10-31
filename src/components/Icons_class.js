import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import image1 from './image1.png';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from '@mui/icons-material/Share'
import './Header.css';
class Icons_class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count1: 0,
          count2:0,
          count3:0
        };
    }

    increment1 = () => {
        this.setState((prevState) => ({
          count1: prevState.count1 + 1,
        }));
    };
    increment2 = () => {
        this.setState((prevState) => ({
          count2: prevState.count2 + 1,
        }));
    };
    increment3 = () => {
        this.setState((prevState) => ({
          count3: prevState.count3 + 1,
        }));
    };

    render() {
      return (
        <div>
            <center>
          <div className='image'>
          <h3>BY CLASS COMPONENT</h3>
            <img src={image1} alt="My Image" />
            <p>image-2</p>
          </div>
          <FavoriteBorderOutlinedIcon style={{ color: "red", fill: "red" }} onClick={this.increment1} />
          <span>{this.state.count1}</span>&nbsp;&nbsp;&nbsp;
          <ModeCommentOutlinedIcon style={{color:"brown"}} onClick={this.increment2}/>
        <span>{this.state.count2}</span>&nbsp;&nbsp;&nbsp;
        <ShareIcon style={{color:"black"}} onClick={this.increment3}/>
        <span>{this.state.count3}</span>
          <br /><br /><br />
          </center>
          </div>
        
      );
    }
}

export default Icons_class;
