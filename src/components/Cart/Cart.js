import React, { useEffect, useContext } from "react";
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

    const addItem = (item) => {
        item.qty + 1;
    };

    const shippingPrice = () => {
        let shippingNum = savedItems.length;
        return shippingNum * 2.99;
    };

    // const handleCheckout = () => {
    //     setTimeout(() => {
    //         setSavedItems([]);
    //     }, 2000);
    // };

    console.log(savedItems);

    return (
        <main className={classes.container}>
            <Container>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <List>
                            {savedItems.map((item, i) => (
                                <ListItem key={item.productCode}>
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
                                                <Button size="large">-</Button>
                                                Quantity: {item.qty}
                                                <Button
                                                    size="large"
                                                    onClick={() =>
                                                        addItem(item)
                                                    }
                                                >
                                                    +
                                                </Button>
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
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        className={classes.logo}
                                    >
                                        COPYPAXI
                                    </Typography>
                                    <Divider className={classes.logo} />
                                    <Typography
                                        variant="body1"
                                        className={classes.logo}
                                    >
                                        Order Total: ${totalPrice()}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        className={classes.logo}
                                    >
                                        Shipping: $2.99 ea
                                    </Typography>
                                    <Divider className={classes.logo} />
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        className={classes.logo}
                                    >
                                        Total: $
                                        {(
                                            Number(totalPrice()) +
                                            Number(shippingPrice())
                                        ).toFixed(2)}
                                    </Typography>
                                    <CardActions>
                                        <Button
                                            size="medium"
                                            variant="outlined"
                                            onClick={() => setSavedItems([])}
                                        >
                                            EMPTY CART
                                        </Button>
                                        <Button
                                            size="medium"
                                            variant="outlined"
                                        >
                                            CHECKOUT
                                        </Button>
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
