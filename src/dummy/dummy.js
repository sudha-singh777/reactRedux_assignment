
import React, { Component } from 'react';
import './App.css';
import {Slider} from '@material-ui/core/';

class Dummy extends Component {
  constructor(props){
    super(props)
    this.state={
      val:[20,70]
    }
  }
  updateVal = (e,val)=>{
    
    this.setState({val})
    console.warn(val,"val")
  }
  render() {
    return (
      <div>
        <div style={{width:300,margin:40}}>
          <Slider value={this.state.val} max={200}
          onChange={this.updateVal}/>
        </div>
      </div>
    );
  }
}

export default Dummy;

