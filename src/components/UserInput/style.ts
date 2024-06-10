import { styled, TextField, Box } from "@mui/material";

export const UserInputStyledTextField = styled(TextField)(() => ({
    width: "100%",
    // backgroundColor: "red",
}));
export const UserInputContainerStyledBox = styled(Box)(() => ({
    height: "40px",
    borderRadius: '50px',
    width: '50%',
    background: '#2e2f2e',
    position: 'fixed',
    bottom: "30px",
    // paddingLeft: '20px',
    paddingRight: '10px',
    paddingTop: "5px",
    display: "flex",
    justifyContent: "left",
    zIndex: 1,
}));