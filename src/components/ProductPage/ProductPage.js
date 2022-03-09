import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";

const ProductPage = ({ products }) => {
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
        <main>
            <Grid container justifyContent="center" spacing={2}>
                <Typography>{item.title}</Typography>
                <Grid item>
                    <img src={item.imageUrl} alt="" />
                    <Typography variant="h6">
                        Color: {item.color}
                    </Typography>{" "}
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel>Size</InputLabel>
                        <Select
                            value={size}
                            label="Size"
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <MenuItem value="xs">XS</MenuItem>
                            <MenuItem value="sm">SM</MenuItem>
                            <MenuItem value="md">MD</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Quantity</InputLabel>
                        <Select
                            value={qty}
                            label="Quantity"
                            onChange={(e) => setQty(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
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
        </main>
    );
};

export default ProductPage;
