import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        margin: "1rem 0 4rem",
    },
    title: {
        marginBottom: "1.25rem",
    },
    divider: {
        marginBottom: "2rem",
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
    img: {
        width: "100%",
    },
    reviewText: {
        margin: "0 0 4rem 1rem",
    },
    sizeForm: {
        padding: "0 2rem",
        maxWidth: "125px",
    },
    qtyForm: {
        padding: "0 2rem",
        maxWidth: "125px",
    },
    btn: {
        display: "flex",
        margin: "2rem auto 0",
        backgroundColor: "#007DB3",
        color: "white",
        fontWeight: "700",
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            backgroundColor: "#1990c",
        },
    },
}));
