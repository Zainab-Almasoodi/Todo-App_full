import React, { Fragment, useState, useEffect } from "react";
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

//components

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/Landing";
//toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

 

const isAuth = async () => {
   try {
    const response =await fetch("http://localhost:5000/auth/is-verify",{
      method:"GET",
      headers:{ token: localStorage.token}
    });

    const parseRes = await response.json();
    parseRes === true ? setIsAuthenticated(true):
    setIsAuthenticated(false);
    
    //console.log(parseRes)
   } catch (err) {
    console.error(err.message);
    
   }
  }

  useEffect(() => {
    isAuth();
   
  }, []);

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
          <Route
              path="/"
              element={!isAuthenticated ? ( 
                  <Landing />
                  ) : (
                    <Navigate to="/dashboard" />
                  )
              }
            />
            <Route
              path="/login"
              element={!isAuthenticated ? ( 
          
                  <Login setAuth={setAuth}/>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
              }
            />
            <Route
              path="/register"
              element={
                !isAuthenticated ? (
                  <Register setAuth={setAuth} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;