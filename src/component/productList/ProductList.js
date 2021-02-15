import React, { Component } from 'react';
import {Grid, Card, Paper, Typography, ButtonBase,Button} from '@material-ui/core';
import '../../assest/ProductList.css';
import { connect } from 'react-redux';
import {addToCart} from '../../store/action/cartAction';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';


class ProductList extends Component {

    render() {
        const {allProList} = this.props;
        return (
            <React.Fragment>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell colSpan={3} align='center'><h2>Product List</h2></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {(allProList && allProList.length>0)? allProList.reverse()
                                        .slice((this.props.page - 1) * this.props.itemsPerPage,
                                        this.props.page * this.props.itemsPerPage)
                                        .map((data)=>(
                            <TableRow key={data.id}>
                            <TableCell>
                                <Grid item>
                                    <ButtonBase className="image">
                                        <img className="img" alt="complex" src={data.image} />
                                    </ButtonBase>
                                </Grid>
                            </TableCell>
                            <TableCell>
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
                            </TableCell>
                            <TableCell>
                                <Grid item>
                                    <Typography variant="subtitle1">${data.price}</Typography>
                                                    
                                        <Button color="primary"  mx="auto"
                                        onClick={()=>this.props.addToCart(data)}
                                        variant="outlined">ADD TO CART
                                        </Button>
                                                    
                                </Grid>
                            </TableCell>
                            </TableRow>
                            )): 
                            <TableRow>
                                <TableCell align="center">no data</TableCell>
                            </TableRow> 
                                    }
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        );
    }
}

export default connect(null,{addToCart})(ProductList);