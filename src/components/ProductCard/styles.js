import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
    cardText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: ".5rem",
    },
    reviewText: {
        margin: "0  0 1rem 1rem",
    },
}));
