import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Delete } from "@material-ui/icons";

const Cart = () => {
    const classes = useStyles();
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
            return null;
        }
    };

    const shippingPrice = () => {
        let shippingNum = savedItems.length;
        return shippingNum * 2.99;
    };

    const handleCheckout = () => {
        setTimeout(() => {
            setSavedItems([]);
        }, 2000);
    };

    return (
        <main className={classes.container}>
            <Container>
                <Grid container justifyContent="center" spacing={4}>
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
                                                className={classes.img}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6">
                                                {item.name}
                                            </Typography>
                                            <Divider />
                                            <Typography variant="h6">
                                                ${item.originPrice * item.qty}
                                            </Typography>
                                            <Typography variant="body1">
                                                Size: {item.size}
                                            </Typography>
                                            <Typography variant="body1">
                                                Quantity: {item.qty}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        size="medium"
                                        color="secondary"
                                        onClick={() => removeItem(item)}
                                    >
                                        <Delete />
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container direction="column">
                                    <Typography>copypaxi/logo</Typography>
                                    <Divider />
                                    <Typography>Order Total</Typography>
                                    <Typography>Shipping: $2.99</Typography>
                                    <Divider />
                                    <Typography>
                                        Total: {totalPrice(savedItems)}
                                    </Typography>
                                    <CardActions>
                                        <Button
                                            size="medium"
                                            onClick={() => setSavedItems([])}
                                        >
                                            EMPTY CART
                                        </Button>
                                        <Button size="medium">CHECKOUT</Button>
                                    </CardActions>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

export default Cart;
