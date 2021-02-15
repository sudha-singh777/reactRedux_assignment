import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import {fetchApi} from '../../store/action/productAction';

import {Checkbox,FormControlLabel,FormGroup} from '@material-ui/core/';

class Filter extends Component {
    constructor(props) {
        super(props)
            this.state={
                fourGb: false,
                threeGb: false,
                sixGb: false       
            }
    }
    //  componentDidMount(){
    //     // let promiseFun = await this.props.fetchApi();
    //     //  this.setState({loading:false}) 
    //     console.log(this.props.allProducts,"product fil")
    //     console.log(this.props.filterList,"product filter")
    // }

    handleChange =(e)=>{
       // console.log(e.target.checked);
       
        if(e.target.name==="fourGb"){
            this.setState({ fourGb: e.target.checked },
                this.filterArray());
        }else if(e.target.name==="threeGb"){
            this.setState({ threeGb: e.target.checked },
                this.filterArray());
        }else{
            this.setState({ sixGb: e.target.checked },
                this.filterArray());
        }
       
    }

    

    filterArray=()=>{
        setTimeout(()=>{
        let filterArray = this.props.allProducts.filter(product => 
            (this.state.sixGb && product.ram === 6) || 
            (this.state.fourGb && product.ram === 4)  || 
            (this.state.threeGb && product.ram === 3)
            )
            console.log(filterArray,"filArray")
            this.props.filterList(filterArray)
            if(!this.state.sixGb && !this.state.fourGb && !this.state.threeGb){
                this.props.filterList(this.props.allProducts)
            }
        },1000)
       
            
    }
    render() {
        const {allProList} = this.props;
        return (
            <React.Fragment>
            <Grid>
                <h2 style={{ textAlign: 'center'}} >Filter</h2> 
                <h3>RAM</h3>
                <FormGroup>
                <FormControlLabel
                control={<Checkbox 
                     checked={this.state.sixGb} 
                     onChange={this.handleChange}
                     name="sixGb" />}
                label="6GB"
            />
                <FormControlLabel
                    control={<Checkbox 
                        checked={this.state.fourGb} 
                        onChange={this.handleChange} 
                        name="fourGb" />}
                    label="4GB"
                />
                <FormControlLabel
                    control={<Checkbox 
                         checked={this.state.threeGb}
                          onChange={this.handleChange} 
                         name="threeGb" />}
                    label="3GB"
                />
              
                </FormGroup>
            </Grid>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state=>{
    console.log(state,"state")
    return{
        allProList:state.pro
    }
}

export default connect(mapStateToProps,{fetchApi})(Filter);