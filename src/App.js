import React, {useState} from "react";
import firebase, {auth} from "./firebase/config";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import './App.css';

function App() {
  //Provedor de autenticacion con google
  let provider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [user, setUser] = useState({});
  let [isLogged, setIsLogged] = useState(false);
  let [menu, setMenu] = useState(false);

  const signInGoogle = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
    }).catch(error => {
      setIsLogged(false);
      console.log(error);
    })
  }

  const signInFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      console.log(user);
    }).catch(error => {
      console.log(error);
    })
  }

  const signIn = (result) => {

      let user = result.user;
      setUser(user);
      setIsLogged(true);
      console.log(user);

  }

  const signOut = () => {
    toggleContextMenu();
    setUser({});
    setIsLogged(false);
  }

  const toggleContextMenu = () => {
    //Clonar la lista de objetos
    let menuClone = JSON.parse(JSON.stringify(menu));
    //Actualizamos el valor de la propiedad selected
    menuClone = !menuClone;
    //Actualizamos el estado
    setMenu(menuClone);
    console.log(menu)
  }


  return (
    <Router>

      {isLogged
        ? 
        <div className="App">
          <Header logged ={isLogged} user={user} menuFn={toggleContextMenu} menu={menu} signOut={signOut}/>
          <Switch>
            <PrivateRoute path="/" logged ={isLogged} user={user} exact>  
              <Profile/> 
            </PrivateRoute>
            <PrivateRoute path="/pokemon" logged ={isLogged} user={user}>  
              <Pokemon/> 
            </PrivateRoute>
          </Switch>
          
        </div>  
        : 
        <div className="App">
          <Header logged ={isLogged} user={user}/>
          <Switch>
            <Route path="/" exact>
              <SignIn signInGoogle={signInGoogle} signInFacebook={signInFacebook} signIn ={signIn} /> 
            </Route>
            <Route path="/registro">
              <SignUp/>
            </Route>
            <PrivateRoute path="/pokemon" logged ={isLogged} user={user}>  
              <Pokemon/> 
            </PrivateRoute>
          </Switch>
          
        </div>  
      }


    
      
    </Router> 
  );
}

export default App;
