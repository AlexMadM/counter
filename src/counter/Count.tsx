import React from 'react';
import {Button} from "@mui/material";

import {CountType} from "./counter-reducer";
import style from "./Settings.module.css";



type  CountProps={
    increment:()=>void
    count:CountType
    reset:()=>void
    setReset:(res:boolean)=>void

}

const Count = (props:CountProps) => {





    return (
        <div>
           <span className={style['error-message']}>{props.count.count}</span>
            <div>
                <Button variant="contained" onClick={props.increment}
                        disabled={props.count.count >= props.count.maxValue }
                >inc
                </Button>
                <Button variant="contained" onClick={props.reset}
                         disabled={props.count.count === 0}
                >reset</Button>
                <Button  variant="contained" onClick={()=>(props.setReset(true))}

                >set</Button>
            </div>
        </div>
    );
};

export default Count;