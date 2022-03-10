import { CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Hero = () => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.container}>
                <CardMedia className={classes.imgContainer} />
                <div className={classes.card}>
                    <Typography variant="h3" className={classes.cardText}>
                        Introducing Spring 2022
                    </Typography>
                    <Typography variant="h5" className={classes.cardSubtext}>
                        Inspired by Outside Perspectives
                    </Typography>
                    <Link to="/products" className={classes.button}>
                        Explore Collection
                    </Link>
                </div>
            </Grid>
        </>
    );
};

export default Hero;
