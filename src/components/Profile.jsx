import React from "react";

export default function Panel(props){
    return (
        <React.Fragment>
            <h1>{props.user.displayName}</h1>
            <img src={props.user.providerData[0].photoURL} />
        </React.Fragment>
    )
}