import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        position: "relative",
        height: "100vh",
        width: "100%",
        marginBottom: "20rem",
    },
    imgContainer: {
        backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0281/7544/files/Kestle-S20Argentina-0436_60615d77-0cca-4c0e-b1ac-77765f78616f_1600x.png?v=1645851102')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
    },
    card: {
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "85%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    cardText: {
        fontWeight: "700",
        marginBottom: ".5rem",
    },
    cardSubtext: {
        fontWeight: "700",
        marginBottom: "1.5rem",
    },
    button: {
        maxWidth: "175px",
        fontWeight: "700",
        textDecoration: "none",
        background: "white",
        color: "black",
        padding: ".5rem 1.5rem",
        transition: theme.transitions.create(["color", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            color: "white",
            backgroundColor: "black",
        },
    },
}));
