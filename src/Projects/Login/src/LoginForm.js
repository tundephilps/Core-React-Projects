import { useState } from 'react'
import { login } from "./utils";
import "./styles.css";

// ================ LOGIN FORM ====================
// 
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const disableButton = !email || password.length < 6 || loading

  const handleLogin = async () => {
    setError(null)
    setLoading(true)
    try {
      await login({ email, password })
      alert('Login successful')
      setLoading(false)
    } catch(error) {
      setError(error.message)
      setLoading(false)
    }
  }

 
  return (
<>
<h6>
Tasks:
<br/>
The Login button is disabled if email is blank OR if password is under 6 letters
<br/>Disables the Login button while login action is being performed
<br/>
Shows an error message if login fails. The error should be cleared every time user re-attempts to log in.
<br/>
Shows an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.
<br />
Only the password "bingo123" must be able to have access and login successfully
</h6>
   
    <div className="wrapper">
      <div className="row">
        <label className='label' htmlFor={"email"}>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} id={"email"} type={"email"} value={email} className="input" />
      </div>
      <div className="row">
        <label className='label'  htmlFor={"password"}>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} id={"password"} type={"password"} value={password} className="input"/>
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage">{error}</div>

      <div className="button">
        <button disabled={disableButton} onClick={handleLogin}>Login</button>
      </div>

    </div>
    </>
  );
}
