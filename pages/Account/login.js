import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import style from "./Account.module.css";
const Login = () => {
  const initialvalues = { email: "", password: "", check: false };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [credentials, setcredentials] = useState(true);
  const router=useRouter();
  const handleSignup=()=> {
    router.push('/Account/signup')
}
const handleChange = (e) => {
    setcredentials(true);
    const { name, value, checked } = e.target;
    if (e.target.type === "text")
      setformvalues({ ...formvalues, [name]: value });
    else setformvalues({ ...formvalues, [name]: checked });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalues.email, formvalues.password);
    axios
      .post("http://b8ee-132-154-72-240.ngrok.io/api/auth/local", {
        identifier: formvalues.email,
        password: formvalues.password,
      })
      .then((response) => {
        router.push("/announce");
      })
      .catch((error) => {
        setcredentials(false);
        setformvalues(initialvalues);
      });
  };
  return (
    <div className={style.outer}>
    <div className={style.codeplus}>
      <h1>CodePlus</h1>
      <p className={style.p}>
        jjhkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhgftrdeswasedrftgyhjk
      </p>
    </div>
    <div className={style.account}>
      <div className={style.btn}>
        <div></div>
        <button className={style.Signup} onClick={handleSignup} >
          Sign Up
        </button>
        <button className={style.Login} >Log In</button>
      </div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Fill your account Details:</h3>
        </div>
        <div className={style.form}>
          <div className={style.label}>
            <label>
              College Email Id
              <input
                type="text"
                name="email"
                value={formvalues.email}
                onChange={handleChange}
                className={style.input}
              />
            </label>
          </div>
          <div className={style.label}>
            <label>
              Password
              <input
                type="text"
                name="password"
                value={formvalues.password}
                onChange={handleChange}
                className={style.input}
              />
            </label>
          </div>
          <div className={style.label}>
            <label>
              Confirm Password
              <input
                type="text"
                name="password"
                value={formvalues.password}
                onChange={handleChange}
                className={style.input}
              />
            </label>
          </div>
        </div>
        <div className={style.label}>
          <label>
            <input
              type="checkbox"
              name="check"
              value={formvalues.check}
              onChange={handleChange}
            />
            Remember me
          </label>
        </div>
        <div className={style.buttonbox}>
          <button className={style.button}>LOG IN</button>
        </div>
        <div>
          <p>{!credentials ? "wrong credential" : null}</p>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
