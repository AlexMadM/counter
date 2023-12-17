import React from 'react';

type ButtonType = {
    onClick: () => void
    name: string
    disabled?: boolean
}
const Button = (props: ButtonType) => {
    const {onClick, name, disabled} = props;


    return (
        <button disabled={disabled} onClick={onClick}>{name}</button>
    );
};

export default Button;