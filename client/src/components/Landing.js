import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container-fluid bg-light p-5 mt-5">
    <h1>Welcom to your Todo App</h1>
    <p>Sign In and start bulding your todo list</p>
    <Link to= "/login" className="btn btn-primary my-3 m-2">Login</Link>
    <Link to="/register" className="btn btn-primary my-3 m-2">Register</Link>
    </div>
  )
}

export default Landing