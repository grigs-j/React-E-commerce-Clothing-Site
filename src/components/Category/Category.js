import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, Divider, Typography, Container } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import useStyles from "./styles";

const Category = ({ products, categories }) => {
    const classes = useStyles();
    const { category } = useParams();
    const listOfCategories = [
        "bottoms",
        "hoodies",
        "coats",
        "other",
        "tshirts",
    ];

    const filteredData = products.filter((product) =>
        listOfCategories.includes(category)
            ? product.category === category
            : products
    );

    return (
        <Container>
            <main className={classes.container}>
                <Grid container alignItems="center">
                    <Link to="/" className={classes.titleBreadcrumb}>
                        HOME
                    </Link>
                    <Typography variant="h4" className={classes.slash}>
                        {" "}
                        /{" "}
                    </Typography>
                    <Typography className={classes.itemBreadcrumb}>
                        {listOfCategories.includes(category)
                            ? category.toUpperCase()
                            : "All Products"}
                    </Typography>
                </Grid>
                <Divider />
                <Grid
                    container
                    justifyContent="center"
                    spacing={4}
                    className={classes.productsContainer}
                >
                    {filteredData.map((product) => (
                        <Grid item xs={12} md={6} lg={4}>
                            <ProductCard
                                key={product.productCode}
                                product={product}
                                categories={categories}
                            />
                        </Grid>
                    ))}
                </Grid>
            </main>
        </Container>
    );
};

export default Category;
