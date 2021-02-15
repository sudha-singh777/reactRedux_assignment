import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {Typography,Grid} from '@material-ui/core/';
import { connect } from 'react-redux';
import SearchData from '../filter/Search';
import {Link} from 'react-router-dom';

class LayHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            quantity:''
        }
    }
    componentDidMount(){
        const LocalStoreData = JSON.parse(localStorage.getItem('cartValue'))
       const totalQuantity= LocalStoreData.reduce((accumulator, current) =>
             accumulator + parseFloat(current.count),0);
        this.setState({quantity:totalQuantity})
    }

    render() {
          const {allProList,quantity} = this.props;
        return (
            <React.Fragment>
                
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc'}}  >
                            <div style={{padding:"10px"}}>
                                <Grid container >
                                    
                                        <Grid item xs>
                                        <Link to="/">
                                            <img src="https://lh3.googleusercontent.com/proxy/4q6cLp01EPhVV8NlVwYTPrW3swQb4OFIocuS-_emC10hWTPZBf858RJPpCJ77M4fzKy6gnNNnQqVjaJPYmHjFWqYDVPZWLLdgd7xZmiGeBOmTrKUjk4Ci-1kgDKifY_7i5YGVlmP5YqWx8s-6xuie9aKlIqkOgOC"
                                            style={{width:"20%", marginLeft:"40px"}}/>
                                        </Link>
                                            
                                        </Grid>
                                    {this.props.filterList ?
                                    <Grid item xs>
                                        <div>
                                            <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <SearchIcon/>
                                            </Grid>
                                            <Grid item>
                                                <SearchData filterList={this.props.filterList} allProducts={allProList}/>
                                                
                                            </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    :null}
                                    <Grid item xs style={{textAlign:"right",marginTop:"23px", marginRight:"30px"}}>
                                        <Link to='/cart'><ShoppingCartIcon/>
                                            <span style={{paddingTop:"-23px"}}>{quantity}</span>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state=>{
    //console.log(state,"state product")
    return{
        allProList:state.pro
    }
}

export default connect(mapStateToProps) (LayHeader);