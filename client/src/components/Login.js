import React, { Fragment,useState } from 'react';
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';

const Login = ({setAuth}) => {
const [inputs, setInputs] = useState({
  email:"",
  password:""
});

const {email, password} = inputs;

const onchange = (e) => {
  setInputs({...inputs, [e.target.name]: e.target.value})
};


const onSubmitForm = async (e) => {
  e.preventDefault();
try {
  const body = {email, password};
  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(body)
  });

  const parseRes = await response.json();
if (parseRes.token){
  localStorage.setItem("token", parseRes.token);
    setAuth(true);
    toast("Hello", { autoClose: false });
}
else{
  setAuth(false);
  toast.error(parseRes)
}
    


} catch (err) {
  console.log(err.message)
  }
  
}
  return (<Fragment>
    
    <h1 className='text-center my-5'>login</h1>
    <form onSubmit={onSubmitForm}>
     <input type='email' name="email"
     placeholder='email'
     className='form-control my-3'
     value={email}
     onChange={e=>onchange(e)}/>

     <input type='password' name="password"
     placeholder='password' 
     className='form-control my-3'
     value={password}
     onChange={e=>onchange(e)}
     />
      <button className='btn btn-success btn-block'>
      Login
      </button>
    </form>
    <Link to= "/register">Register</Link>
    </Fragment>
  )
}

export default Login