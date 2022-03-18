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
        transition: theme.transitions.create(["color"], {
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
            backgroundColor: "rgb(245,245,245)",
            color: "gray",
        },
    },
    linkMobile: {
        color: "black",
        fontWeight: "700",
        fontSize: "1rem",
        padding: ".25rem 0",
        textDecoration: "none",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            backgroundColor: "white",
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
            backgroundColor: "rgb(245,245,245)",
            color: "gray",
        },
    },
    navCloseToggle: {
        cursor: "pointer",
        height: "2.5rem",
        width: "2.5re,",
        fontSize: "2.5rem",
    },
    gridcenter: {
        display: "flex",
        justifyContent: "center",
    },
    gridRight: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    catLinks: {
        padding: ".25rem",
        textDecoration: "none",
        color: "black",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "gray",
            backgroundColor: "white",
        },
    },
    menuItem: {
        flexDirection: "column",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            backgroundColor: "white",
            color: "gray",
        },
    },
    mobileDrawerContainer: {
        width: "100%",
    },
    mobileDrawerGrid: {
        paddingTop: ".5rem",
        height: "56px",
        alignItems: "center",
    },
    mobileDrawerList: {
        width: "100%",
        height: "calc(100vh - 56px)",
    },
    topDivider: {
        marginBottom: "4rem",
    },
}));
