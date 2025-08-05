import React from 'react'
import styles from "./Button.module.css";

type ButtonProps = {
    buttonTitle: string;
}

const Button = ({ buttonTitle }: ButtonProps) => {
    return (
        <div className={styles.btn}>{buttonTitle}</div>
    )
}

export default Button;