import React, { useEffect, useState } from "react";
import styles from "../App.module.scss";
import LoginIllustration from "../assets/loginIlustration.png";
import { Link } from "react-router-dom";

function Login() {
  const [validationStatus, setValidationStatus] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((username === "ibankciti", password === "ibank1234")) {
      setValidationStatus(true);
    } else {
      setValidationStatus(false);
    }
    // if (validationStatus === false) {
    //   alert("Incorrect username or password");
    // }
  };

  return (
    <div className={styles.loginContainer}>
      <form action="#" className={styles.loginForm} onSubmit={handleSubmit}>
        <img src={LoginIllustration} alt="" />
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="David918...."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="drp12345...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          <Link
            className={styles.buttonLink}
            to={"/home"}
          >
            Login
          </Link>
        </button>
      </form>

      {validationStatus && (
        <div className={styles.successContainer}>
          <div className={styles.successModal}>
            <h1>Login successful</h1>
            <p>Redirecting to Home page...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
