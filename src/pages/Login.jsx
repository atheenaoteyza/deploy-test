import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/firebaseActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(authenticateUser(credentials));
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Login;
