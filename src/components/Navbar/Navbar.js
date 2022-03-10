import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    Hidden,
    SwipeableDrawer,
    MenuItem,
    Button,
    ClickAwayListener,
    Popper,
    MenuList,
    Menu,
    Grid,
    IconButton,
    Badge,
    Container,
} from "@material-ui/core";
import { ArrowRight, MenuRounded, ShoppingCart } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = ({ categories }) => {
    const [openMobile, setOpenMobile] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openCat = Boolean(anchorEl);
    const classes = useStyles();

    const { savedItems } = useContext(Context);

    //category dropdown
    const handleDropdown = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCatClose = () => {
        setAnchorEl(null);
    };

    //cart badge logic
    const quantities = savedItems ? savedItems.map((item) => item.qty) : 0;
    const totalQty = quantities.reduce((a, c) => a + c, 0);

    // console.log(savedItems);
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar>
                <Container>
                    <Grid container alignItems="center">
                        <Grid item xs={4}>
                            <Hidden smDown>
                                <Link to="/products" className={classes.link}>
                                    ALL PRODUCTS
                                </Link>

                                <Button
                                    onClick={handleDropdown}
                                    className={classes.link}
                                >
                                    Categories
                                </Button>
                                <Popper
                                    open={openCat}
                                    disablePortal={true}
                                    transition={true}
                                >
                                    {
                                        <ClickAwayListener
                                            onClickAway={handleCatClose}
                                        >
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={openCat}
                                                onClose={handleCatClose}
                                                anchorOrigin={{
                                                    horizontal: "right",
                                                }}
                                            >
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={handleCatClose}
                                                    >
                                                        {categories.map(
                                                            (category) => (
                                                                <Link
                                                                    to={`/products/${category.routeName}`}
                                                                    key={
                                                                        category.title
                                                                    }
                                                                >
                                                                    {
                                                                        category.title
                                                                    }
                                                                </Link>
                                                            )
                                                        )}
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </ClickAwayListener>
                                    }
                                </Popper>
                            </Hidden>
                            <Hidden mdUp>
                                <MenuRounded
                                    className={classes.navOpenToggle}
                                    onClick={() => setOpenMobile(true)}
                                />
                            </Hidden>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/" className={classes.homelink}>
                                COPYPAXI
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Hidden xsDown>
                                <Link to="/contact" className={classes.link}>
                                    CONTACT US
                                </Link>
                            </Hidden>
                            <IconButton
                                component={Link}
                                to="/cart"
                                color="default"
                                className={classes.cartBtn}
                            >
                                <Badge
                                    badgeContent={
                                        quantities.length !== 0
                                            ? totalQty
                                            : null
                                    }
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>

                    <SwipeableDrawer
                        className={classes.drawer}
                        open={openMobile}
                        anchor="right"
                        onOpen={() => setOpenMobile(true)}
                        onClose={() => setOpenMobile(false)}
                    >
                        <ArrowRight
                            className={classes.navCloseToggle}
                            onClick={() => setOpenMobile(false)}
                        />
                        <List>
                            <ListItem>
                                <Link
                                    to="/"
                                    onClick={() => setOpenMobile(false)}
                                >
                                    HOME
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/products">All Products</Link>
                            </ListItem>
                            <ListItem>
                                <Button onClick={handleDropdown}>
                                    Categories
                                </Button>
                                <Popper
                                    open={openCat}
                                    disablePortal={true}
                                    transition={true}
                                >
                                    {
                                        <ClickAwayListener
                                            onClickAway={handleCatClose}
                                        >
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={openCat}
                                                onClose={handleCatClose}
                                                anchorOrigin={{
                                                    horizontal: "right",
                                                }}
                                            >
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={handleCatClose}
                                                    >
                                                        {categories}
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </ClickAwayListener>
                                    }
                                </Popper>
                            </ListItem>
                        </List>
                    </SwipeableDrawer>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
