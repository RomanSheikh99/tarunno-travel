import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import About from './Components/Pages/About/About';
import AddPlace from './Components/Pages/AddPlace/AddPlace';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import MangeBooklist from './Components/Pages/MangeBooklist/MangeBooklist';
import MyBooklist from './Components/Pages/MyBooklist/MyBooklist';
import NotFound from './Components/Pages/NotFound/NotFound';
import UpdateBooklist from './Components/Pages/UpdateBooklist/UpdateBooklist';
import Footer from './Components/Sheared/Footer/Footer';
import NavBar from './Components/Sheared/NavBar/NavBar';
import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';
import AllPlaces from './Components/Pages/AllPlaces/AllPlaces';
import PlaceDetails from './Components/Pages/PlaceDetails/PlaceDetails';

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
          <Route exact path="/allPlaces">
            <AllPlaces></AllPlaces>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/placeDetails/:placeID">
            <PlaceDetails></PlaceDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/myBooklist">
            <MyBooklist></MyBooklist>
          </PrivateRoute>
          <PrivateRoute exact path="/addPlace">
            <AddPlace></AddPlace>
          </PrivateRoute>
          <PrivateRoute exact path="/MangeBooklist">
            <MangeBooklist></MangeBooklist>
          </PrivateRoute>
          <PrivateRoute exact path="/updateBooklist/:booklistId">
            <UpdateBooklist></UpdateBooklist>
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
