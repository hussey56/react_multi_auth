import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Post from './pages/Post'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom';
const App = () => {
  const [user, setUser] = useState(null);
const BACKEND_URL = process.env.BACKEND_URL;
  useEffect(() => {
    const getUser = () => {
      fetch(`${BACKEND_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject);

        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (

      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    
  );
}

export default App
