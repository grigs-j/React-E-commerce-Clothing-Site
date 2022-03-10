import {
    Typography,
    Container,
    Grid,
    ListItemText,
    List,
    Divider,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const ContactPage = () => {
    const classes = useStyles();
    return (
        <menu className={classes.container}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <img
                            src="https://sthetik.netlify.app/static/media/service.489b1e970d6b42ca99ac.jpg"
                            alt=""
                            className={classes.img}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h3" align="center">
                            Hi! How can we help?
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            className={classes.subtext}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subTitle}
                        >
                            Operating Hours
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="body1" align="center">
                            We offer 24/7 customer support!
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            className={classes.subtext}
                        >
                            Atención al Cliente en español de lunes a domingo de
                            7 AM a 10 PM Centro
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subTitle}
                        >
                            Call Us Toll Free
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="body1" align="center">
                            555-555-5555
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            className={classes.subtext}
                        >
                            555-555-5555
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subTitle}
                        >
                            More on Social Media
                        </Typography>
                        <Divider className={classes.divider} />
                        <Grid container alignItems="center" direction="column">
                            <Link
                                to="//twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.socialLinks}
                            >
                                Twitter
                            </Link>
                            <Link
                                to="//twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.socialLinks}
                            >
                                Twitter
                            </Link>
                            <Link
                                to="//twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.socialLinks}
                            >
                                Twitter
                            </Link>
                            <Link
                                to="//twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={classes.socialLinks}
                            >
                                Twitter
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </menu>
    );
};

export default ContactPage;
