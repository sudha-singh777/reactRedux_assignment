import React, { Component } from 'react';
import {Grid, Card, Paper, Typography, ButtonBase,Button,spacing } from '@material-ui/core';
import '../../assest/ProductList.css';

import { connect } from 'react-redux';
import {fetchApi} from '../../store/action/productAction';
import {addToCart} from '../../store/action/cartAction';

class ProductList extends Component {
    constructor(props) {
        super(props)
            this.state={
               // loading:true,          
            }
    }
     componentDidMount(){
       // let promiseFun = await this.props.fetchApi();
        // this.setState({loading:false}) 
    }
    render() {
        const {allProList} = this.props;
        console.log(allProList,"dd")
        return (
            <React.Fragment>
                
                <Grid item >
                    <h2 style={{ textAlign: 'center',}} >Products</h2>
                    {(allProList && allProList.length>0)? allProList.reverse()
                        .slice((this.props.page - 1) * this.props.itemsPerPage,
                         this.props.page * this.props.itemsPerPage)
                        .map((data)=>(
                        <Card className="proList" variant="outlined" key={data.id}>
                            <Paper className="paper">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3} md={4} lg={4} >
                                    <ButtonBase className="image">
                                        <img className="img" alt="complex" src={data.image} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm={7} md={6} lg={6} container direction="column" spacing={2}>
                                    <Grid item>
                                        <Typography gutterBottom variant="subtitle1" color="secondary">
                                                {data.name} ({data.internal_storage}GB)
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                                {data.brand} 
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                               {data.ram} GB RAM | {data.internal_storage} GB ROM
                                        </Typography>
                                        <Typography variant="body2">
                                                {data.battery_capacity} mAh Battery
                                        </Typography>
                                        <Typography variant="body2">
                                                {data.network_type} Network Type
                                        </Typography>
                                        <Typography variant="body2">
                                                {data.operating_system} Operating System
                                        </Typography>
                                        <Typography variant="body2">
                                                {data.resolution_type} Resolution
                                        </Typography>
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} lg={2} spacing={2}  mx="auto">
                                    <Typography variant="subtitle1">${data.price}</Typography>
                                    
                                    <Button color="primary"  mx="auto"
                                    onClick={()=>this.props.addToCart(data)}
                                    variant="outlined">ADD TO CART
                                    </Button>
                                    
                                </Grid>
                                
                            </Grid>
                            </Paper>
                        </Card>
                        )): <div>Loading...</div> 
                    }
                        
                </Grid>
            </React.Fragment>
        );
    }
}
// const mapStateToProps = state=>{
//    // console.log(state,"state")
//     return{
//         allProList:state.pro
//     }
// }
//export default connect(mapStateToProps,{fetchApi, addToCart})(ProductList);
export default connect(null,{addToCart})(ProductList);