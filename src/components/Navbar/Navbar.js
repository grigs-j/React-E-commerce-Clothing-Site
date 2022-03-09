import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    Typography,
    Hidden,
    SwipeableDrawer,
    MenuItem,
    Button,
    ClickAwayListener,
    Popper,
    MenuList,
    Menu,
    IconButton,
    Badge,
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
    const quantities = savedItems.map((item) => item.qty);
    const totalQty = quantities.reduce((a, c) => Number(a) + Number(c));

    console.log(savedItems);
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography>LOGO</Typography>
                <div className={classes.grow} />
                <Hidden xsDown>
                    <Link to="/">HOME</Link>
                    <Link to="/products">All Products</Link>
                    <Button onClick={handleDropdown}>Categories</Button>
                    <Popper
                        open={openCat}
                        disablePortal={true}
                        transition={true}
                    >
                        {
                            <ClickAwayListener onClickAway={handleCatClose}>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={openCat}
                                    onClose={handleCatClose}
                                    anchorOrigin={{
                                        horizontal: "right",
                                    }}
                                >
                                    <MenuList>
                                        <MenuItem onClick={handleCatClose}>
                                            {categories.map((category) => (
                                                <Link
                                                    to={`/products/${category.routeName}`}
                                                    key={category.title}
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </ClickAwayListener>
                        }
                    </Popper>
                    <IconButton component={Link} to="/cart" color="inherit">
                        <Badge
                            badgeContent={
                                totalQty.length !== 0 ? totalQty : null
                            }
                            color="secondary"
                        >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Hidden>
                <div className={classes.grow} />
                <Hidden smUp>
                    <MenuRounded
                        className={classes.navOpenToggle}
                        onClick={() => setOpenMobile(true)}
                    />
                </Hidden>
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
                            <Link to="/" onClick={() => setOpenMobile(false)}>
                                HOME
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/products">All Products</Link>
                        </ListItem>
                        <ListItem>
                            <Button onClick={handleDropdown}>Categories</Button>
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
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
