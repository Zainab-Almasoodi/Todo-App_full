import React,{ useState, useEffect} from 'react';
import InputTodo from "./todolist/InputTodo"
import ListTodos from "./todolist/ListTodos"

const Dashboard = ({setAuth}) => {

  const [name, setName]= useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [todosChange, setTodosChange] = useState(false);

 const getName= async()=> {
  try {
    const response = await fetch("http://localhost:5000/dashboard/", {
      method: "GET",
      headers:{ token: localStorage.token}
    });
    
    const parseRes = await response.json();
    setAllTodos(parseRes);

    setName(parseRes[0].user_name);
    
 } catch (err) {
  console.error(err.message);
 }
  }
const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  setAuth(false);
}

  useEffect(()=>{
    getName();
    setTodosChange(false);
    },[todosChange]);

  return (
    <div >
      <div className='d-flex mt-5 justify-content-around'>
        <h1>{name}s Todo List</h1>
        <button className='btn btn-primary' onClick={e => logout(e)}>
        Logout
        </button>
      </div>
      <InputTodo setTodosChange={setTodosChange}/>
      <ListTodos allTodos={allTodos} setTodosChange={setTodosChange}/>
    </div>
  );
};

export default Dashboard