import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context";
import {
    Button,
    Card,
    Grid,
    List,
    ListItem,
    Typography,
} from "@material-ui/core";

const Cart = () => {
    const { savedItems, setSavedItems, removeItem } = useContext(Context);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const totalPrice = () => {
        if (savedItems.length > 0) {
            let prices = savedItems.map((item) => item.originPrice * item.qty);
            let totalPrice = prices.reduce((a, c) => Number(a) + Number(c));
            return totalPrice.toFixed(2);
        } else {
            return 0;
        }
    };

    const shippingPrice = () => {
        let shippingNum = savedItems.length;
        return shippingNum * 4.99;
    };

    const handleCheckout = () => {
        setTimeout(() => {
            setSavedItems([]);
        }, 2000);
    };

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item>
                <List>
                    {savedItems.map((item, i) => (
                        <ListItem key={i}>
                            <Grid container>
                                <Grid item>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        height="150"
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6">
                                        ${item.originPrice * item.qty}
                                    </Typography>
                                    <Typography variant="h6">
                                        Size: {item.size}
                                    </Typography>
                                    <Typography variant="h6">
                                        Quantity: {item.qty}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item>
                <Card></Card>
            </Grid>
        </Grid>
    );
};

export default Cart;
