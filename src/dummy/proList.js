import React, { Component } from 'react';
import {Grid, Card, Paper, Typography, ButtonBase } from '@material-ui/core';
import '../../assest/ProductList.css';

class ProductLists extends Component {
    constructor(props) {
        super(props)
            this.state={
                loading:true,
                datas:null          
            }
    }
    async componentDidMount(){
        const url="https://todo-app-9a245-default-rtdb.firebaseio.com/todoDatas/mobile_api.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({datas:data[0],loading:false})
        console.log(data); 
    }
    render() {
        return (
            <React.Fragment>
                
                <Grid item >
                    <h2 style={{backgroundColor:"red", textAlign: 'center',}} >Products</h2>
                    {this.state.loading || !this.state.datas ? <div>Loading...</div> :
                        <Card className="proList" variant="outlined">
                            <Paper className="paper">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3} md={4} lg={4}>
                                    <ButtonBase className="image">
                                        <img className="img" alt="complex" src={this.state.datas.image} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm={7} md={7} lg={6} container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} lg={2}>
                                    <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                                
                            </Grid>
                            </Paper>
                        </Card>
                    }
                        
                </Grid>
            </React.Fragment>
        );
    }
}

export default ProductLists;