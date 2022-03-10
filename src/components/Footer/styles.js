import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        backgroundColor: "black",
        padding: "4rem 0",
    },
    logo: {
        color: "white",
        fontWeight: "700",
        fontSize: "1.25rem",
        textDecoration: "none",
        marginBottom: "1rem",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "gray",
        },
    },
    link: {
        color: "white",
        fontSize: "1.25rem",
        margin: "0 1rem 1.5rem",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.standard,
        }),
        "&:hover": {
            color: "gray",
        },
    },
    portLink: {
        color: "gray",
        textDecoration: "none",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "white",
        },
    },
    jgtext: {
        marginTop: "1.25rem",
        color: "white",
    },
}));
