import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Connect from "./components/Connect";
import Explore from "./components/Explore";
import Explorereality from "./components/Explorereality";
import Exploreyoutube from "./components/Exploreyoutube";
import Exploreblog from "./components/Exploreblog";
import Exploremicroinfluencer from "./components/Exploremicroinfluencer";
import Explorebeauty from "./components/Explorebeauty";
import Explorelifestyle from "./components/Explorelifestyle";
import Explorefashion from "./components/Explorefashion";
import Exploresmallbusiness from "./components/Exploresmallbusiness";
import Explorefood from "./components/Explorefood";
import Exploresustainablebusiness from "./components/Exploresustainablebusiness";
import Exploretravel from "./components/Exploretravel";
import Explorefitness from "./components/Explorefitness";
import Contract from "./components/contract";



import Dashboard from "./components/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/Connect" component={Connect} />
            <PrivateRoute exact path="/Explore" component={Explore} />
            <PrivateRoute exact path = "/Explorereality" component = {Explorereality} />
            <PrivateRoute exact path = "/Exploreyoutube" component = {Exploreyoutube} />
            <PrivateRoute exact path = "/Exploreblog" component = {Exploreblog} />
            <PrivateRoute exact path = "/Exploremicroinfluencer" component = {Exploremicroinfluencer} />
            <PrivateRoute exact path = "/Explorebeauty" component = {Explorebeauty} />
            <PrivateRoute exact path = "/Explorelifestyle" component = {Explorelifestyle} />
            <PrivateRoute exact path = "/Explorefashion" component = {Explorefashion} />
            <PrivateRoute exact path = "/Exploresmallbusiness" component = {Exploresmallbusiness} />
            <PrivateRoute exact path = "/Explorefood" component = {Explorefood} />
            <PrivateRoute exact path = "/Exploresustainablebusiness" component = {Exploresustainablebusiness} />
            <PrivateRoute exact path = "/Exploretravel" component = {Exploretravel} />
            <PrivateRoute exact path = "/Explorefitness" component = {Explorefitness} />
            <PrivateRoute exact path = "/contract" component = {Contract} />              
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;