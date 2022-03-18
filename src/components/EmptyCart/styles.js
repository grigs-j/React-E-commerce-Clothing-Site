import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "100%",
    },
    grid: {
        height: "100vh",
        width: "100%",
    },
    link: {
        textDecoration: "none",
        color: "gray",
        transition: theme.transitions.create(["color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "lightgray",
        },
    },
}));
