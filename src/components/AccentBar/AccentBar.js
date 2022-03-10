import React from "react";
import useStyles from "./styles";
import { Container, Grid, Typography } from "@material-ui/core";

const AccentBar = () => {
    const classes = useStyles();
    return (
        <Grid item className={classes.accentBar}>
            <Container>
                <Grid container justifyContent="center">
                    <Typography variant="body1">
                        Free shipping $99+ / Easy Returns
                    </Typography>
                </Grid>
            </Container>
        </Grid>
    );
};

export default AccentBar;
