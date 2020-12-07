import React from 'react';
import {Icon} from '@material-ui/core'

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const Detail = (props) => {
 
    return(
        <div key={props.index}>
            <span className="span-strong">{
                props.name === 'hp' ? <span><Icon>favorite</Icon> {props.name}</span> : 
                props.name === 'attack' ? <span><Icon>flash_on</Icon> {props.name}</span>  : 
                props.name === 'defense' ? <span><Icon>security</Icon> {props.name}</span>  : 
                props.name === 'special-attack' ? <span><Icon>local_fire_department</Icon> {props.name}</span> : 
                props.name === 'special-defense' ? <span><Icon>verified_user</Icon> {props.name}</span> : 
                <span><Icon>speed</Icon> {props.name}</span> 
             }  : </span>

            <span className="span-strong">{props.stat}</span>
            
        </div>
        
     );
};

export default Detail


