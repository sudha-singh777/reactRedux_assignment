import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography,Container,Grid,ButtonGroup,Button } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';
import {increaseQuantity,decreaseQuantity} from '../../store/action/cartAction';
import LayHeader from '../layout/LayHeader';


class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            cart:[],
            quantity:''
        }
    }
    componentDidMount(){
        let cartItem = JSON.parse(localStorage.getItem('cartValue'));
        this.setState({cart:cartItem})   
    }

    updateCartItems=(cartData,checkUpdate)=>{
        if(checkUpdate==="increment"){
            this.props.increaseQuantity(cartData.id)
        }else{
            this.props.decreaseQuantity(cartData.id,cartData.count);
        }
        
        setTimeout(()=>{
            let cartItem = JSON.parse(localStorage.getItem('cartValue'));
            const totalQuantity= cartItem.reduce((accumulator, current) =>
             accumulator + parseFloat(current.count),0);
            //this.setState({quantity:totalQuantity})
            this.setState({cart:cartItem,quantity:totalQuantity})
            console.log(this.state.quantity,"????????????????????");
        },500)
    }

    // const LocalStoreData = JSON.parse(localStorage.getItem('cartValue'))
    //    const totalQuantity= LocalStoreData.reduce((accumulator, current) =>
    //          accumulator + parseFloat(current.count),0);
    //     this.setState({quantity:totalQuantity})
    render() {
        const { cart } = this.state;
        return (
            <React.Fragment>
            <LayHeader quantity={this.state.quantity}/>
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