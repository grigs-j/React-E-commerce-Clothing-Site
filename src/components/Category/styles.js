import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        margin: "1rem auto 4rem",
    },
    titleBreadcrumb: {
        fontSize: "1.5rem",
        textDecoration: "none",
        margin: "1rem .5rem 0",
        color: "gray",
        transition: theme.transitions.create(["color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "lightgray",
        },
    },
    itemBreadcrumb: {
        fontSize: "1rem",
        textDecoration: "none",
        margin: "1rem .5rem 0",
        color: "#1990c6",
    },
    slash: {
        color: "lightgray",
        margin: "1.25rem .5rem 0",
    },
    productsContainer: {
        margin: "2.5rem 0",
    },
}));
