import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { POST } from "../services/fetchExtender";

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginButtonReady, setLoginButtonReady] = useState(false);

  const history = useHistory();

  const handleLoginButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    POST("/auth/login", { email, password })
      .then((serverRes) => {
        if (serverRes.token) {
          props.setIsLoggedIn(true);
          localStorage.setItem("token", serverRes.token);
          history.push("/");
        } else {
          alert(
            `No token was received from the backend, please try logging in again.`
          );
        }
      })
      .catch((e) => alert(e));
  };

  const checkLoginButtonChange = () => {
    if (email && password) {
      setLoginButtonReady(true);
    }
  };

  return (
    <div className="p-4 bg-white shadow d-flex m-auto w-50">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              checkLoginButtonChange();
            }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">test@test.io</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              checkLoginButtonChange();
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <small className="form-text text-muted">
            3G3gyhgU868tQUYJPNSg!yngXZhi8p6oEw*qmMDwZtS#zEC$WdaKA@W3LP
          </small>
        </div>
        <button
          onClick={handleLoginButton}
          disabled={!loginButtonReady}
          className={`btn ${
            loginButtonReady ? "btn-info" : "btn-outline-info"
          }`}
        >
          Login!
        </button>
      </form>
    </div>
  );
};

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default Login;
