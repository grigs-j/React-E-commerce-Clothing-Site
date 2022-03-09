import { Container } from "@material-ui/core";
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
import { productsData, categoriesData } from "./data";
import { Context } from "./Context";

function App() {
    const { savedItems } = useContext(Context);

    const PrivateRoute = ({ children }) => {
        return savedItems.length > 0 ? children : <Navigate to="/" />;
    };

    return (
        <Container>
            <Router>
                <Navbar categories={categoriesData} />
                <Routes>
                    <Route exact path="/" element={<Hero />} />
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
                        path="/products"
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

                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route
                        path="/cart"
                        element={
                            <PrivateRoute>
                                <Cart />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
