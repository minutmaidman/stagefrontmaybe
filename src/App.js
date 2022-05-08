import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/navbar';
import Liste from './components/list/liste';
import Ajout from './components/ajout/ajout';
import Logo from './components/logo/logo';
import { Redirect } from "react-router-dom"; 

class App extends React.Component {
  render() {
  return (
    <div className="container">
      <Router>

        <Route exact path="/">
          <Redirect to="/liste" />
        </Route>

        <Navbar/>
        <Route path= "/logo" component={Logo} />
        <Route path= "/liste" component={Liste} />
        <Route path= "/ajout" component={Ajout} />
      </Router>
    </div>
  );
}
 
}
export default App;
