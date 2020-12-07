import React from "react";

import {Route} from "react-router-dom";

export default function PrivateRoute(props){
    return (
        <Route path={props.path} render={
            () => props.logged ? (React.cloneElement(props.children, {user: props.user})) : (<h1>No estas loggeado</h1>)
        } />
    )
}