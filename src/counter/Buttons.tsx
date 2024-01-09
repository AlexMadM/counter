import React from 'react';
import {Button} from "@mui/material";

type ButtonType = {
    onClick: () => void
    name: string
    disabled?: boolean
}
const Buttons = (props: ButtonType) => {
    const {onClick, name, disabled} = props;


    return (
        <Button variant="contained" onClick={props.increment}
                disabled={props.count.count >= props.count.maxValue }
        >inc
        </Button>
    );
};

export default Buttons;