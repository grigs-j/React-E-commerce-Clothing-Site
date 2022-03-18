import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const EmptyCart = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={classes.grid}
            >
                <Grid item>
                    <Typography variant="h3" align="center">
                        You have no items in your cart,{" "}
                        <Link to="/products" className={classes.link}>
                            let's add some!
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EmptyCart;
