import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import About from './Components/Pages/About/About';
import AddPlace from './Components/Pages/AddPlace/AddPlace';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import MyBooklist from './Components/Pages/MyBooklist/MyBooklist';
import NotFound from './Components/Pages/NotFound/NotFound';
import OurServices from './Components/Pages/OurServices/OurServices';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Welldone from './Components/Pages/Welldone/Welldone';
import Footer from './Components/Sheared/Footer/Footer';
import NavBar from './Components/Sheared/NavBar/NavBar';
import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <OurServices></OurServices>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/ServiceDetails/:serviceID">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/myBooklist">
            <MyBooklist></MyBooklist>
          </PrivateRoute>
          <PrivateRoute exact path="/addPlace">
            <AddPlace></AddPlace>
          </PrivateRoute>
          <PrivateRoute exact path="/welldone">
            <Welldone></Welldone>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
