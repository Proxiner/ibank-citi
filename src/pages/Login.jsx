import React, { useEffect, useState, useRef} from "react";
import styles from "../App.module.scss";
import LoginIllustration from "../assets/loginIlustration.png";

function Login({ homeUrl }) {
  const [validationStatus, setValidationStatus] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkbox = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ((username === "ibankciti", password === "ibank1234")) {
      setValidationStatus(true);
      setTimeout(handelRedirect, 600);
      sessionStorage.setItem("isValid", true);
      if (checkbox.current.checked === true) {
        localStorage.setItem("isValid", true);
      }
    } else {
      setValidationStatus(false);
    }
    // if (validationStatus === false) {
    //   alert("Incorrect username or password");
    // }
  };
  

  const handleLS = () => {
    if (localStorage.getItem("isValid") === "true") {
      setValidationStatus(true);
      setTimeout(handelRedirect, 600);
    }
  };

  document.body.onload = handleLS;

  const handelRedirect = () => {
    window.location.href = `/${homeUrl}`;
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
            type="password"
            placeholder="drp12345...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="checkbox">remember me</label>
          <input type="checkbox" id="checkbox" ref={checkbox} />
        </div>
        <button type="submit">Login</button>
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
