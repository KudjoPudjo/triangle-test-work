import React from "react"
import classes from "./Input.module.scss";

type Props = {
    onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    name?:string,
    value?:string|number,
    label:string,
    type:"number"|"string"
}


function Input({
    type,
    onChange,
    name,
    value,
    label
}:Props){
    return (
        <div className={classes.input_wrap}>
            <label className={classes.input_label}>
                {label}
            </label>
            <input type={type} onChange={onChange} value={value} className={classes.input} />
        </div>
    )
}

export default Input