import { useState } from "react"
import swal from 'sweetalert';
// import { Navigate, useNavigate, Link } from "react-router-dom";
import {useNavigate, useLocation , Link} from "react-router-dom";


export default function Signup() {
    const[name,setName]=useState();
    const[Email,setEmail]=useState();
    const[Password,setPassword]=useState();
    const [showBtn, setshowBtn] = useState(true);
    const [showBtnpass, setshowBtnpass] = useState(true);
    const navi= useLocation();
    const navi2 = navi.state;
   
    const navigation = useNavigate();



    const here= async()=>{
      const data={name,Email,Password};
     
      console.log(data);
       
    

        let result = await fetch('http://localhost:38000/sign', {
          method: 'post',

          body: JSON.stringify({data}),
          header: {
            'Content-Type': 'application/json'
          },
    
        });

    console.log(data);
        result = await result.json();
        console.log (result);
        const navii=() =>{
navigation("/");

        }
        swal(
          {
            title: `Hello ${name}`,
            text: 'Welcome to Go Green',
            icon: 'success',
            button: `OK ${navii()}`,
          }
        );
        
        
        
    }
    const namechng =(e)=>{
      setName(e.target.value);
      console.log(name);
      
    }
    const emailChng = (e) => {
      setEmail(e.target.value);
      setshowBtn(false)
    }
    const passChang = (e) => {
  
      setPassword(e.target.value);
      setshowBtnpass(false)
  
    }
  

  return (
    <>
       {/* <h1>Register here</h1>
      <input type='text' className='input' placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='email' className='input' placeholder='enter email' value={Email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' className='input' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='button' className='button ' onClick={here}>Sign up</button> */}
       <form className="loginback"  >
      <h2>SignUp</h2><br />
      <div className="form-group d-flex flex-column g-2">
      <div className="form-group d-flex flex-column g-2">
  
  <label htmlFor="name" className="form-label m-2 h5" >Name</label>
  <input type="name" name="name"  className="form-control-lg" value={name} placeholder="Name" onChange={namechng} required/></div>

        <label htmlFor="email" className="form-label m-2 h5">Email</label>
        <input type="email" name="mail" className="form-control-lg" value={Email} onChange={emailChng} placeholder="Email" required /></div>
      <div className="form-group d-flex flex-column g-2">
        {showBtn ? <span style={{ "color": "red", "margin-left": "4px" }}>Please enter a valid Email include:"@ .com"</span> : ""}
        <label htmlFor="password" className="form-label m-2 h5">Password</label>
        <input type="password" name="psd" className="form-control-lg" value={Password} onChange={passChang} placeholder="Password" required />
      </div>
      {showBtnpass ? <span style={{ "color": "red", "margin-left": "4px" }}>Please enter a valid Password include"#" </span> : ""}
      <button className="btn btn-primary btn-lg m-3 ms-0" onClick={here}>Regester</button>
      {/* {msg  && <span style={{color:'red',padding:'5px'}}>{msg}</span> } */}
      <hr />
      <span>Already have Account |   <Link to="/LogIn">LogIn</Link></span>
    </form>
    </>
  )
}

