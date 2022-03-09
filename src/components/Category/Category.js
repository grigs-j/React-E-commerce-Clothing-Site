import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid } from "@material-ui/core";

const Category = ({ products, categories }) => {
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <ProductCard
                        key={product.productCode}
                        product={product}
                        categories={categories}
                    />
                ))}
            </Grid>
        </main>
    );
};

export default Category;
