import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios.post("/users/login", null, { auth: user }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
