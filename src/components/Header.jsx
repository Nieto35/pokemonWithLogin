import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { DotsVerticalOutline } from "@graywolfai/react-heroicons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Header(props) {
  const classes = useStyles();
  return (

    props.logged ?

    <header className="navbar-container">
        <nav className="centroHeader">
          <div className="user-name col-6" onClick={props.menuFn}>
            <Avatar className={classes.avatar}>
              <img alt="profile image" src={props.user.providerData[0].photoURL} className="img-avatar"/>
            </Avatar>
            <h3>{props.user.displayName}</h3>
            <DotsVerticalOutline className="menu" />
          </div>

          {props.menu ? <div className="sig-out" onClick={props.signOut} >
          
            <ul className="navbar">
                <li>
                  <Link to="/">Sing Out</Link>
                </li>
            </ul>
          </div> : null}

          <div className="navbar-login">
            
            <ul className="navbar">
                <li>
                  <Link to="/">Perfil</Link>
                </li>
                <li>
                 <Link to="/pokemon">Pokemon</Link>
                </li>
            </ul>
          </div>
        </nav>
    </header>

    :
    <header className="navbar-container">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
