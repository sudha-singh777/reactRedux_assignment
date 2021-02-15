import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import {fetchApi} from '../../store/action/productAction';
import TextField from '@material-ui/core/TextField';

import {Checkbox,FormControlLabel,FormGroup} from '@material-ui/core/';

class SearchData extends Component {
    constructor(props) {
        super(props)
            this.state={
                searchValue:'',      
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
        this.setState({searchValue:e.target.value})
        this.filterArray(e.target.value)
        // if(e.target.name==="fourGb"){
        //     this.setState({ fourGb: e.target.checked },
        //         this.filterArray());
        // }else if(e.target.name==="threeGb"){
        //     this.setState({ threeGb: e.target.checked },
        //         this.filterArray());
        // }else{
        //     this.setState({ sixGb: e.target.checked },
        //         this.filterArray());
        // }
       
    }

    

    filterArray=(searchItem)=>{
        setTimeout(()=>{
        let filterArray = this.props.allProducts.filter(product => 
            product.name.toLowerCase().includes(searchItem)||
            product.ram.toString().includes(searchItem)
            )
            console.log(filterArray,"filArray")
            this.props.filterList(filterArray)
            if(!this.state.searchValue){
                this.props.filterList(this.props.allProducts)
            }
        },1000)
       
            
    }
    render() {
        const {allProList} = this.props;
        return (
            <React.Fragment>
            <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" name="filterData"
                    value={this.state.searchValue}
                    onChange={this.handleChange}/>
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

export default connect(mapStateToProps,{fetchApi})(SearchData);