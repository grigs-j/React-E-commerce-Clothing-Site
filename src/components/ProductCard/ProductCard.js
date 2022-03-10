import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";
import { StarHalf, StarRate } from "@material-ui/icons";
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
                        component="img"
                        height="425"
                        image={product.imageUrl}
                    />
                </Link>
                <CardContent className={classes.card}>
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
