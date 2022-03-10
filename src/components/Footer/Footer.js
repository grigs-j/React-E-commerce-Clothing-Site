import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, YouTube } from "@material-ui/icons";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <main className={classes.container}>
            <Container>
                <Grid container alignItems="center" direction="column">
                    <Link to="#" className={classes.logo}>
                        COPYPAXI
                    </Link>
                    <Grid item>
                        <Link
                            to="//google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={classes.link}
                        >
                            <Instagram />
                        </Link>
                        <Link
                            to="//google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={classes.link}
                        >
                            <Twitter />
                        </Link>
                        <Link
                            to="//google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={classes.link}
                        >
                            <Facebook />
                        </Link>
                        <Link
                            to="//google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={classes.link}
                        >
                            <YouTube />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                variant="body1"
                align="center"
                className={classes.jgtext}
            >
                Created with care by
                <Link to="//jongrigsby.com" className={classes.portLink}>
                    {" "}
                    Jonathan Grigsby
                </Link>
                , &copy; 2022
            </Typography>
        </main>
    );
};

export default Footer;
