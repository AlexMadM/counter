import React from 'react';


type Props = {
    onClick: () => void
    name: string
    disabled?: boolean
}

const Button = (props:Props) => {
  const  {onClick,name,disabled}=props
    return (
        <button disabled={disabled} onClick={onClick}>{name}</button>
    );
};

export default Button;