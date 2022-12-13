import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      <div>
        <button onClick={(e) => {handleDelete(e)}}>Poista käyttäjäsi</button>
      </div>
      <div>
        <button onClick={(e) => {handleLogout(e)}}>Kirjaudu ulos</button>
      </div>
    </>
  );
};

export default Login;
