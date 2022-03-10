import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";
import { StarRate } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const ProductCard = ({ product, category }) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center">
            <Card>
                <Link to={`/products/${category}/${product.productCode}`}>
                    <CardMedia
                        className={classes.card}
                        component="img"
                        height="425"
                        src={product.imageUrl}
                        alt=""
                    />
                </Link>
                <CardContent className={classes.cardText}>
                    <Typography variant="h6" align="center">
                        {product.name}
                    </Typography>
                    <Grid container justifyContent="center">
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <StarRate fontSize="small" />
                        <Typography
                            variant="body2"
                            className={classes.reviewText}
                        >
                            Reviews: {product.reviews}
                        </Typography>
                    </Grid>
                    <Typography variant="h5" align="center">
                        ${product.originPrice}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductCard;
