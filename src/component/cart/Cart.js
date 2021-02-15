import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography,Container,Grid,ButtonGroup,Button } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { connect } from 'react-redux';
import {increaseQuantity,decreaseQuantity} from '../../store/action/cartAction';


class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            cart:[]
        }
    }
    componentDidMount(){
        let cartItem = JSON.parse(localStorage.getItem('cartValue'));
        this.setState({cart:cartItem})
        console.log(this.state.cart,"sfa")
    }

    updateCartItems=(cartData,checkUpdate)=>{
       
        console.log(this.state.cart,"sfa")
        if(checkUpdate==="increment"){
            this.props.increaseQuantity(cartData.id)
        }else{
            this.props.decreaseQuantity(cartData.id,cartData.count);
        }
        
        setTimeout(()=>{
            let cartItem = JSON.parse(localStorage.getItem('cartValue'));
            this.setState({cart:cartItem})
        },500)
    }
    render() {
        const { cart } = this.state;
        console.log(cart,"euw")
        return (
            <React.Fragment>
                <CssBaseline />
                    <Container maxWidth="md">
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc'}} >
                            {cart && cart.length>0 ? cart.map((cartData)=>(
                                <div key={cartData.id} style={{padding:"30px"}}>
                                    <Grid container>
                                    <Grid item xs>
                                        <img src={cartData.image} style={{width:"100px"}}/>
                                    </Grid>
                                    <Grid item xs>
                                        <h3>{cartData.name}</h3>
                                        <p color="textSecondary">&#8377; {cartData.price}</p>
                                    </Grid>
                                    <Grid item xs>
                                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                            <Button onClick={()=>this.updateCartItems(cartData,"decrement")}>
                                            <RemoveIcon/></Button>
                                            <Button>{cartData.count}</Button>
                                            <Button onClick={()=>this.updateCartItems(cartData,"increment")}>
                                            <AddIcon /></Button>
                                        </ButtonGroup>
                                    </Grid>
                                    </Grid>
                                </div>
                            )):
                            <h2>No Cart Items</h2>
                        }
                            <hr/>
                            {cart ? (<div style={{padding:"30px"}}>
                                <Grid container>
                                    <Grid item xs>
                                        <h3 style={{textAlign:"center"}}>Total</h3>
                                    </Grid>
                                    <Grid item xs>
                                       <p style={{textAlign:"center"}}>&#8377; {
                                        cart &&  cart.reduce((a, c) => a + c.price * c.count, 0)
                                        }</p>
                                    </Grid>
                                </Grid>
                            </div>):null}
                        </Typography>
                    </Container>
            </React.Fragment>
        );
    }
}

export default connect(null,{increaseQuantity,decreaseQuantity})(Cart);