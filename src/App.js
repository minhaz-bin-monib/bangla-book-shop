import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/AddProduct/AddProduct";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import pic from "./pictures/b.jpg"


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      <div className="heading-style">
        <img src={pic} alt="" />
        <div className="heading-bg">
        <h1 className="heading-font" ><strong>Bangla Book Shop</strong></h1>
        </div>
      </div>

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Header></Header>

          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>

            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>

            <PrivateRoute path="/checkout/:id" >
              <Checkout></Checkout>

            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>

            </PrivateRoute>





            <Route path="/login">
              <Login></Login>

            </Route>





            <Route exact path="/">
              <Home></Home>
            </Route>


            <Route path="*">
              <NoMatch></NoMatch>
            </Route>

          </Switch>
        </Router>

      </UserContext.Provider>


    </div>
  );
}

export default App;
