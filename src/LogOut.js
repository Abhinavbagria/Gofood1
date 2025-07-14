import React from 'react'
import swal from 'sweetalert';
import { Navigate, useNavigate, Link } from "react-router-dom";
export default function LogOut() {


  const Navigation=useNavigate();
  const navvi =()=>{
    Navigation("/");
  }
  // swal(
  //   {
  //     title: `You have successfully Logged Out `,
  //  text: ' Go Green',
  //  icon: 'success',
  //  button: `OK ${navvi()}`,
  // }
  
  
// )
  return (
    <>
     <h1>You Are Successfullyyy Logged Out</h1> 
    </>
  )
}
