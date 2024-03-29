import React from "react";
import "../css/Button.css";


export function Button (props) {

    const isOperator = (value) => {
        return isNaN(value) && (value !== "=") && (value !== ".");
    };

    return (
        <div className={`button ${isOperator(props.children)? "operator" : null}` } onClick={ () => props.click(props.children)}>
            {props.children}
        </div>
    )
}