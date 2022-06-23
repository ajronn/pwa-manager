import {ReactNode} from "react";
import style from "./button.module.scss";

type Props = {
    children: ReactNode
}

export const Button = ({children}: Props) => {
    return(
        <button className={style.button} >{children}</button>
    )
}