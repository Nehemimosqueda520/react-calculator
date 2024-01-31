import React from "react";
import "../css/ClearButton.css";

export function ClearButton(props) {
    return (
        <div className="clear-button" onClick={props.clear}>
            {props.children}
        </div>
    )
}