import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
    CssBaseline,
} from "@material-ui/core";
import React, { useContext } from "react";
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
import { productsData, categoriesData } from "./data";
import { Context } from "./Context";

let theme = createTheme({
    typography: {
        fontFamily: "Josefin Sans",
    },
});
theme = responsiveFontSizes(theme);

function App() {
    const { savedItems } = useContext(Context);

    const PrivateRoute = ({ children }) => {
        return savedItems.length > 0 ? children : <Navigate to="/" />;
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar categories={categoriesData} />
                <Routes>
                    <Route exact path="/" element={<Hero />} />
                    <Route
                        path="/products"
                        element={
                            <Category
                                products={productsData}
                                categories={categoriesData}
                            />
                        }
                    />
                    <Route
                        path="/products/:category"
                        element={
                            <Category
                                products={productsData}
                                categories={categoriesData}
                            />
                        }
                    />
                    <Route
                        path="/products/:category/:productId"
                        element={
                            <ProductPage
                                products={productsData}
                                categories={categoriesData}
                            />
                        }
                    />

                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                        path="/cart"
                        element={
                            <PrivateRoute>
                                <Cart />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
