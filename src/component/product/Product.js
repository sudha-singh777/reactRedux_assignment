import React, { Component } from 'react';
import { Grid} from '@material-ui/core';
import Filter from '../filter/Filter';
import LayHeader from '../layout/LayHeader';
import { connect } from 'react-redux';
import {fetchApi} from '../../store/action/productAction';
import PaginationOutlined from '../pagination/Pagination';

class Product extends Component {
    constructor(props) {
        super(props)
            this.state={
               allProductList:[],       
            }
        
    }
    async componentDidMount(){
      let apidata= await this.props.fetchApi();
     
        setTimeout((_)=>{
            this.setState(prevState => ({
                allProductList: [...prevState.allProductList, ...this.props.allProList]
              }))
        },2000)
    }
    filterProductList=(myArray)=>{
        this.setState(prevState => ({
            allProductList: [...myArray]
          }))
       
    }
    render() {
        const {allProList} = this.props;
       
        return (
            <React.Fragment>
            {allProList ? <LayHeader filterList={this.filterProductList}  allProducts={allProList}  /> :null }
                
                <Grid container >
                    <Grid item xs={12} sm={4} md={2} spacing={3} style={{ padding: 10 }}>
                        <Filter allProducts={allProList} filterList={this.filterProductList}/>
                    </Grid>
                
                <Grid item xs={12} sm={8} md={9} spacing={3} style={{ padding: 10 }}>
                    
                    {this.state.allProductList && this.state.allProductList.length>0 && <PaginationOutlined  allProList={this.state.allProductList} /> }     
                    
                    </Grid>
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

export default connect(mapStateToProps,{fetchApi})(Product);