import React, { Component } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Typography,Container,Grid,ButtonGroup,Button } from '@material-ui/core/';
import { connect } from 'react-redux';
import {filterApiData} from '../../store/action/productAction';
import SearchData from '../filter/Search';

class LayHeader extends Component {

    render() {
         const {allProList} = this.props;
       
        return (
            <React.Fragment>
                
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc'}}  >
                            <div style={{padding:"10px"}}>
                                <Grid container >
                                    <Grid item xs>
                                        <h2 style={{textAlign:"center"}}>Mobile Api </h2>
                                    </Grid>
                                    <Grid item xs style={{textAlign:"right"}}>
                                        <div >
                                            <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <AccountCircle />
                                            </Grid>
                                            <Grid item>
                                                <SearchData filterList={this.props.filterList} allProducts={allProList}/>
                                                
                                            </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item xs style={{textAlign:"right",marginTop:"23px", marginRight:"30px"}}>
                                        <ShoppingCartIcon/>
                                        <span style={{paddingTop:"-23px"}}>3</span>
                                    </Grid>
                                </Grid>
                            </div>
                        </Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state=>{
    console.log(state,"state product")
    return{
        allProList:state.pro
    }
}

export default connect(mapStateToProps,{filterApiData}) (LayHeader);