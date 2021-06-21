import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


export default function App() {

  //Insert router, links here
  
  return(
    <Router>
      <h1 style={{ margin: 30, padding: 30}} >TV APPS</h1>

      <div className="d-flex justify-content-center" style={{ margin: 30, padding: 30}}>
        <Link to="/netflix" style={{ margin: 10, padding: 10 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix"/>
        </Link>
        
        <Link to="/hbomax" style={{ margin: 10, padding: 10 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBOMax"/>
        </Link>
        
        <Link to="/hulu" style={{ margin: 10, padding: 10 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="HULU"/>
        </Link>
        
        <Link to="/prime" style={{ margin: 10, padding: 10 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="PrimeVideo"/>
        </Link>
      </div>
      
      <Switch>
        <Route exact path="/:id">
          <Child/>
        </Route>
      </Switch>
    
    </Router>
  );
}

function Child() {

  // Below this comment, there's one major key script missing

  let params = useParams();
  let id = params.id;
  console.log(id);

  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}