import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/firebaseActions";

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = () => {
    dispatch(authenticateUser(credentials));
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
    </div>
  );
};

export default Login;
