import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    navbar: {
        backgroundColor: "rgb(245,245,245)",
    },
    homelink: {
        color: "black",
        fontWeight: "700",
        fontSize: "1.25rem",
        marginRight: "2rem",
        textDecoration: "none",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "gray",
        },
    },
    link: {
        color: "black",
        fontWeight: "700",
        fontSize: "1rem",
        marginRight: "2rem",
        textDecoration: "none",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "gray",
        },
    },
    navOpenToggle: {
        cursor: "pointer",
        color: "black",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "gray",
        },
    },
    drawer: {
        width: "100%",
    },
    navCloseToggle: {
        cursor: "pointer",
    },
}));
