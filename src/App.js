import React, { useContext } from "react";
import "./globalstyles.css";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
    CssBaseline,
    Hidden,
} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Category from "./components/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cart from "./components/Cart/Cart";
import ContactPage from "./components/ContactPage/ContactPage";
import AccentBar from "./components/AccentBar/AccentBar";
import Footer from "./components/Footer/Footer";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import { productsData, categoriesData } from "./data";
import { Context } from "./Context";

let theme = createTheme({
    typography: {
        fontFamily: "Josefin Sans",
    },
});
theme = responsiveFontSizes(theme);

// TODO:
// - PAGINATION
// - CHECKOUT

function App() {
    const { savedItems } = useContext(Context);

    const PrivateRoute = ({ children }) => {
        return savedItems.length > 0 ? children : <EmptyCart />;
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar categories={categoriesData} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Hidden xsDown>
                                    <AccentBar />
                                </Hidden>
                                <Hero />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            <>
                                <AccentBar />
                                <Category
                                    products={productsData}
                                    categories={categoriesData}
                                />

                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/products/:category"
                        element={
                            <>
                                <AccentBar />
                                <Category
                                    products={productsData}
                                    categories={categoriesData}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/products/:category/:productId"
                        element={
                            <>
                                <AccentBar />
                                <ProductPage
                                    products={productsData}
                                    categories={categoriesData}
                                />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <>
                                <ContactPage />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <PrivateRoute>
                                <Cart />
                                <Footer />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
