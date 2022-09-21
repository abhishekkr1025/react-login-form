import React, {useState} from "react";
import ReactDOM from 'react-dom';
import "./style.css";

function App(){
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')
  const[confPassword,setConfPassword] = useState('')

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange =(e)=>{
    setConfPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    if(password!=confPassword){
      alert('email does not match');
    } else{
      alert('A form was submitted with '+name+" and "+"email "+email);
    }

    e.preventDefault();
  }
 return(
   <div className = "App">
     <header className = "App-header">
      <form onSubmit = {(e) =>{handleSubmit(e)}}>
      <h1>Sign up form</h1>
      <label>Name: </label>
      <input type="text" value = {name} onChange = {(e)=>{handleChange(e)}}/><br/><br/>
      <label>Email: </label>
      <input type="email" value = {email} onChange = {(e)=>{handleEmailChange(e)}}/><br/><br/>
      <label>Password: </label>
      <input type="password" value = {password} onChange = {(e)=>{handlePasswordChange(e)}}/><br/><br/>
      <label>Confrim Password: </label>
      <input type="text" value = {confPassword} onChange = {(e)=>{handleConfPasswordChange(e)}}/><br/><br/>
      <input type = "submit" value = "Submit"/>
      </form>
     </header>
   </div>
 );
}

export default App;
