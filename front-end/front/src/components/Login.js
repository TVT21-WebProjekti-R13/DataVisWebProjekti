import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios.post("/users/login", null, { auth: user }).then((res) => {
      console.log(res.data);
    });
    navigate("/");
  };
  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("/users/create", { username, password }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <div>Sign up</div>
      <form onSubmit={handleSignup}>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Login;
