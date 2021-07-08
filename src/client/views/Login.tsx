import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { POST } from '../services/fetchExtender';

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const history = useHistory();

  const handleLoginButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    POST('/auth/login', { email, password })
      .then(serverRes => {
        if (serverRes.token) localStorage.setItem("token", serverRes.token);
        if (confirm("Logged in. Go home?")) history.push("/");
      })
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button onClick={handleLoginButton} className="btn btn-primary">
        Login!
      </button>
    </form>
  );
};

export default Login;
