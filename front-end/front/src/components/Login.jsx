import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { username, password };
    await axios.post("/users/login", null, { auth: user });
    navigate("/");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post("/users/create", { username, password });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete("/users/delete");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.post("/users/logout");
  };

  return (
    <>
    <Box sx={{ left: '40%', position: "fixed", backgroundColor: '#d6d6d6', p: 10, borderRadius: 2,}}>
      
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
        <br/>
        <TextField id="outlined-basic" label="Username" variant="outlined" type="text" sx={{color: 'red'}} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <br/>
        <TextField type="password" id="outlined-basic" label="Password" variant="outlined"  onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <br/>
        <Button variant="contained" type="submit">Login</Button>
      </form>
      </Box>
      <>
      <br/>
      <br/>
      <br/>
      </>
      <Box sx={{ top:'50%', left: '40%', position: "fixed", backgroundColor: '#d6d6d6', p: 10, borderRadius: 2,}}>
      <form onSubmit={handleSignup}>
      <h2>Sign up</h2>
        <br/>
        <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <br/>
        <TextField type="password" id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <br/>
        <Button variant="contained" type="submit">Sign Up</Button>
      </form>
    </Box>
    
    <Box sx={{ top: '87%', left: '37%', position: "fixed", p: 10, borderRadius: 2,}}>
    <div>
    <Button variant="contained" onClick={(e) => {handleLogout(e)}}>Kirjaudu ulos</Button> <Button variant="contained" onClick={(e) => {handleDelete(e)}}>Poista käyttäjäsi</Button> 
      </div>
    </Box>
    </>
  );
};

export default Login;
