import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Container,
    Divider,
} from "@material-ui/core";
import { ShoppingCart, StarRate } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../Context";
import useStyles from "./styles";

const ProductPage = ({ products, categories }) => {
    const classes = useStyles();
    const [size, setSize] = useState("");
    const [qty, setQty] = useState(1);
    const { productId } = useParams();
    const { savedItems, saveItem, removeItem } = useContext(Context);

    const item = products.filter(
        (product) => product.productCode === productId
    )[0];

    const handleSaveItem = (item) => {
        item.size = size;
        item.qty = qty;
        saveItem(item);
    };

    return (
        <main className={classes.container}>
            <Container>
                <Grid container justifyContent="center">
                    <Link to="/" className={classes.titleBreadcrumb}>
                        Home
                    </Link>
                    <Typography variant="h4" className={classes.slash}>
                        {" "}
                        /{" "}
                    </Typography>
                    <Link
                        to={`/products/${item.category}`}
                        className={classes.titleBreadcrumb}
                    >
                        {item.category}
                    </Link>
                </Grid>
                <Divider className={classes.divider} />
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img
                            src={item.imageUrl}
                            alt=""
                            className={classes.img}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            align="center"
                            className={classes.title}
                        >
                            {item.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {item.desc.about}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Color: {item.color}
                        </Typography>
                        <Typography variant="h5">
                            ${item.originPrice}
                        </Typography>
                        <Grid container>
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <StarRate fontSize="small" />
                            <Typography
                                variant="body2"
                                className={classes.reviewText}
                            >
                                Reviews: {item.reviews}
                            </Typography>
                        </Grid>

                        <FormControl className={classes.sizeForm} fullWidth>
                            <InputLabel>Size</InputLabel>
                            <Select
                                value={size}
                                label="Size"
                                onChange={(e) => setSize(e.target.value)}
                            >
                                <MenuItem value="xs">XS</MenuItem>
                                <MenuItem value="sm">SM</MenuItem>
                                <MenuItem value="md">MD</MenuItem>
                                <MenuItem value="lg">LG</MenuItem>
                                <MenuItem value="xl">XL</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.qtyForm} fullWidth>
                            <InputLabel>Quantity</InputLabel>
                            <Select
                                value={qty}
                                label="Quantity"
                                onChange={(e) => setQty(e.target.value)}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            className={classes.btn}
                            variant="contained"
                            disabled={size ? false : true}
                            size="medium"
                            onClick={
                                savedItems.includes(item)
                                    ? () => removeItem(item)
                                    : () => handleSaveItem(item)
                            }
                        >
                            <ShoppingCart />{" "}
                            {savedItems.includes(item)
                                ? "Remove from Cart"
                                : "Add to Cart"}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

export default ProductPage;
