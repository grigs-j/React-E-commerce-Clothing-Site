import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, Divider, Typography, Container } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import useStyles from "./styles";
import PaginatedItems from "../PaginatedItems/PaginatedItems";

const Category = ({ products, categories }) => {
    //scrolling up to the top of the page every time the page changes
    // useEffect(() => {
    //     window.scroll(0, 0);
    // }, [page, category]);

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
    const numberOfPages = Math.ceil(filteredData.length / 9);
    const firstPage = numberOfPages - (numberOfPages - 1);
    const lastPage = Math.ceil(filteredData.length);

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
                {/* {numberOfPages === 1 ? null : (
                    <Grid container>
                        <PaginatedItems itemsPerPage={4} />
                    </Grid>
                )} */}
            </main>
        </Container>
    );
};

export default Category;
