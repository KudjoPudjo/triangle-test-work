import React, {ReactNode} from "react"
import "./Button.scss"

type Props = {
    children:ReactNode,
    onClick:React.MouseEventHandler<HTMLButtonElement>,
}

function Button({
    children,
    onClick
}:Props){
    return (
        <button className={"button"} onClick={onClick} >{children}</button>
    )
}

export default Button