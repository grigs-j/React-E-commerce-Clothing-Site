import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    container: {
        marginTop: "6rem",
        minHeight: "calc(90vh - 56px)",
    },
    img: {
        width: "100%",
    },
    card: {
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
        padding: "2.5rem 1.25rem",
        marginBottom: "4rem",
    },
    logo: {
        marginBottom: "1.5rem",
    },
}));
