import { useState, useHistory, useEffect } from "react"
import { Navigate, useNavigate, Link } from "react-router-dom";
import swal from 'sweetalert';
import { createContext } from "react";



export default function LogIn() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [showBtn, setshowBtn] = useState(true);
  const [showBtnpass, setshowBtnpass] = useState(true);
  const navigation = useNavigate();
  




  const emailChng = (e) => {
    setEmail(e.target.value);
    setshowBtn(false)
  }
  const passChang = (e) => {

    setPassword(e.target.value);
    setshowBtnpass(false)

  }
  const signUp =async () => {
    const Data = { Email, Password };

    function navii() {
      navigation("/");
    }
    swal(
      {
        title: `Hello ${Email}`,
        text: 'Welcome to Go Green',
        icon: 'success',
        button: `OK ${navii()}`,
      }
    );



    console.log(Data);
    debugger
    const data = { Email, Password };
    localStorage.setItem('Email_Id', Email)
    let result = await fetch('http://localhost:57000/login', {
      method: 'POST',
      body: JSON.stringify({ data }),
      header: {
        'Content-type': 'application/json',

      }
    });

   
    console.warn("OKK DONE ", result, "okk done ");

   
   



  }

// const navii =()=>{
// const Timeout=setTimeout(nav,5000);
// function nav() {
//   navigation("/");
// }




  return (

 


    <form className="loginback"  >
      <h2>Login</h2><br />
      <div className="form-group d-flex flex-column g-2">

        <label htmlFor="email" className="form-label m-2 h5">Email</label>
        <input type="email" name="mail" className="form-control-lg" value={Email} onChange={emailChng} placeholder="Email" required /></div>
      <div className="form-group d-flex flex-column g-2">
        {showBtn ? <span style={{ "color": "red", "margin-left": "4px" }}>please enter a valid Email</span> : ""}
        <label htmlFor="password" className="form-label m-2 h5">Password</label>
        <input type="password" name="psd" className="form-control-lg" value={Password} onChange={passChang} placeholder="Password" required />
      </div>
      {showBtnpass ? <span style={{ "color": "red", "margin-left": "4px" }}>please enter a valid Password </span> : ""}
      <button className="btn btn-primary btn-lg m-3 ms-0" onClick={signUp}>Sign in</button>
      {/* {msg  && <span style={{color:'red',padding:'5px'}}>{msg}</span> } */}
      <hr />
      <span>Don't have an account?  |   <Link to="/Signup">Register Here</Link></span>
    </form>


  )
}


