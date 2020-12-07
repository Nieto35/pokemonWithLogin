import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth } from "../firebase/config";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export default function SignIn(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const classes = useStyles();

  const login = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((response) => { 
        setEmail("");
        setPassword("");
        props.signIn(response)
        })
      .catch((error) => console.log(error));
  };

  const handleInputEmail = (evento) => {
    //Capturar lo que está escribiendo el usuario
    const emailFn = evento.target.value;
    setEmail(emailFn);
  };

  const handleInputPassword = (evento) => {
    //Capturar lo que está escribiendo el usuario
    const passwordFn = evento.target.value;
    setPassword(passwordFn);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={login}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange = {(event) => handleInputEmail(event)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange = {(event) => handleInputPassword(event)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.signInGoogle}
          >
            Sign in with google
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.signInFacebook}
          >
            Sign in with facebook
          </Button>

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}