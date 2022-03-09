import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, category }) => {
    return (
        <Card>
            <Link to={`/products/${category}/${product.productCode}`}>
                <CardMedia
                    component="img"
                    height="225"
                    image={product.imageUrl}
                />
            </Link>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
