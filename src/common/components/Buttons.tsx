
import {Button} from "@mui/material";
import {ColorButton, StyleButton} from "./button";
import React from "react";


type Props = {
    onClick: () => void
    name: string
    disabled?: boolean
}

 const Buttons = (props: Props) => {
    const {onClick, name, disabled} = props
    return (
        <ColorButton  size="small"  disabled={disabled}  onClick={onClick} variant="contained" href="#contained-buttons">
            {name}
        </ColorButton>

    );
};

export default Buttons
// <button disabled={disabled} onClick={onClick}>{name}</button>