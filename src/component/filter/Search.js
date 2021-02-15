import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import {fetchApi} from '../../store/action/productAction';
import TextField from '@material-ui/core/TextField';

class SearchData extends Component {
    constructor(props) {
        super(props)
            this.state={
                searchValue:'',      
            }
    }

    handleChange =(e)=>{
        this.setState({searchValue:e.target.value})
        this.filterArray(e.target.value)
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
                <TextField id="input-with-icon-grid" label="Search Product" name="filterData"
                    value={this.state.searchValue}
                    onChange={this.handleChange}/>
            </Grid>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state=>{
    return{
        allProList:state.pro
    }
}

export default connect(mapStateToProps,{fetchApi})(SearchData);