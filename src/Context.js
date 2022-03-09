import React from "react";
import { useLocalStorage } from "./components/useLocalStorage";

const Context = React.createContext();

const ContextProvider = (props) => {
    const [savedItems, setSavedItems] = useLocalStorage("savedItems", []);

    const saveItem = (item) => {
        setSavedItems([...savedItems, item]);
    };

    const removeItem = (item) => {
        setSavedItems([
            ...savedItems.filter((prevItems) => prevItems !== item),
        ]);
    };

    return (
        <Context.Provider
            value={{
                saveItem,
                savedItems,
                setSavedItems,
                removeItem,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export { Context, ContextProvider };
