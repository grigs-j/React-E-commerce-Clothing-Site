import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    Hidden,
    SwipeableDrawer,
    MenuItem,
    Button,
    Menu,
    Grid,
    IconButton,
    Badge,
    Container,
    Divider,
} from "@material-ui/core";
import {
    ArrowRight,
    ArrowRightAlt,
    MenuRounded,
    ShoppingCart,
} from "@material-ui/icons";
import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = ({ categories }) => {
    const [openMobile, setOpenMobile] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const openCat = Boolean(anchorEl);
    const classes = useStyles();

    const { savedItems } = useContext(Context);

    //category dropdown
    const handleDropdown = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCatClose = () => {
        setAnchorEl(false);
        setOpenMobile(false);
    };

    //cart badge logic
    const quantities = savedItems ? savedItems.map((item) => item.qty) : 0;
    const totalQty = quantities.reduce((a, c) => a + c, 0);

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
                                    disableRipple
                                >
                                    Categories
                                </Button>
                                <Menu
                                    open={openCat}
                                    onClose={handleCatClose}
                                    anchorEl={anchorEl}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                >
                                    {categories.map((category) => (
                                        <MenuItem
                                            onClick={handleCatClose}
                                            className={classes.menuItem}
                                            key={category.title}
                                        >
                                            <Link
                                                to={`/products/${category.routeName}`}
                                                className={classes.catLinks}
                                            >
                                                {category.title}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Hidden>
                            <Hidden mdUp>
                                <MenuRounded
                                    className={classes.navOpenToggle}
                                    onClick={() => setOpenMobile(true)}
                                />
                            </Hidden>
                        </Grid>
                        <Grid item xs={4} className={classes.gridcenter}>
                            <Link to="/" className={classes.homelink}>
                                COPYPAXI
                            </Link>
                        </Grid>
                        <Grid item xs={4} className={classes.gridRight}>
                            <Hidden xsDown>
                                <Link to="/contact" className={classes.link}>
                                    CONTACT US
                                </Link>
                            </Hidden>
                            <IconButton
                                component={Link}
                                to="/cart"
                                color="default"
                                disableRipple
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
                        className={classes.mobileDrawerContainer}
                        open={openMobile}
                        anchor="top"
                        onOpen={() => setOpenMobile(true)}
                        onClose={() => setOpenMobile(false)}
                    >
                        <Container>
                            <Grid
                                container
                                className={classes.mobileDrawerGrid}
                            >
                                <Grid item xs={4}>
                                    <ArrowRight
                                        className={classes.navCloseToggle}
                                        onClick={() => setOpenMobile(false)}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    className={classes.gridcenter}
                                >
                                    <Link
                                        to="/"
                                        className={classes.homelink}
                                        onClick={() => setOpenMobile(false)}
                                    >
                                        COPYPAXI
                                    </Link>
                                </Grid>
                                <Grid item xs={4} className={classes.gridRight}>
                                    <IconButton
                                        component={Link}
                                        to="/cart"
                                        color="default"
                                        disableRipple
                                        className={classes.cartBtn}
                                        onClick={() => setOpenMobile(false)}
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
                        </Container>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item className={classes.mobileDrawerList}>
                                <List>
                                    <Divider className={classes.topDivider} />
                                    <ListItem>
                                        <Link
                                            to="/"
                                            onClick={() => setOpenMobile(false)}
                                            className={classes.linkMobile}
                                        >
                                            HOME
                                        </Link>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <Link
                                            to="/contact"
                                            onClick={() => setOpenMobile(false)}
                                            className={classes.linkMobile}
                                        >
                                            CONTACT US
                                        </Link>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <Link
                                            to="/products"
                                            onClick={() => setOpenMobile(false)}
                                            className={classes.linkMobile}
                                        >
                                            ALL PRODUCTS
                                        </Link>
                                    </ListItem>
                                    <Divider />

                                    <ListItem>
                                        <Button
                                            onClick={handleDropdown}
                                            className={classes.linkMobile}
                                            disableRipple
                                        >
                                            Categories <ArrowRight />
                                        </Button>
                                        <Menu
                                            className={classes.menuNav}
                                            open={openCat}
                                            onClose={handleCatClose}
                                            anchorEl={anchorEl}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "center",
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "center",
                                            }}
                                        >
                                            {categories.map((category) => (
                                                <MenuItem
                                                    onClick={handleCatClose}
                                                    className={classes.menuItem}
                                                    key={category.title}
                                                >
                                                    <Link
                                                        to={`/products/${category.routeName}`}
                                                        className={
                                                            classes.catLinks
                                                        }
                                                    >
                                                        {category.title}
                                                    </Link>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Grid>
                        </Grid>
                    </SwipeableDrawer>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
