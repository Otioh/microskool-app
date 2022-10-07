import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MicroskoolIcon from '../Images/micro.png';
import {faLock, faKey, faUserLock} from '@fortawesome/free-solid-svg-icons';
import Alert from './Alert';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login({alert, setalert}) {
   const [email, setEmail]= useState("");
   const [password, setpassword] = useState("");

let navigate=useNavigate();

const process=()=>{
    console.log("pre");
    axios.post('http://192.168.43.31:5000/', {email,password}).then((response)=>{
console.log(response.data);
    setalert({...alert, status:true, type:'success', message:response.data.message})

    })
    setalert({...alert, status:true, type:'success', msg:'Login Successful'})
setTimeout(() => {
    navigate('/dashboard')
}, 2000);
}

useEffect(() => {
    

    return () => {
        setalert({...alert, status:false, type:'info'})
    };
}, [email, password]);

  return (
    <>

<div className='mother centered'>
    <div className='card shadow margin'>
<div className='card-header'>
    <img alt='Logo' className='microskool-icon' src={MicroskoolIcon} />
<text style={{float:"right"}} className='microskool-title'>
Login
</text>
</div>
<div className='card-body'>
<Alert msg={alert.msg} cap={alert.cap} type={alert.type} status={alert.status} />

<input type='email' className='form-control' value={email} placeholder='E-Mail' onChange={(e)=>{
setEmail(e.target.value)
}} />

<input type='password' className='form-control' value={password} placeholder='Password ' onChange={(e)=>{
setpassword(e.target.value)
}} />


</div>
<div className='card-footer'>

<button className='btn microskool-button' onClick={process}>
        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Login
        </button>
<br/>
<button className='btn microskool-outline-button'>
        <FontAwesomeIcon icon={faKey}></FontAwesomeIcon> Reset Password
        </button>   
<Link to='/signup'>

        <button className='btn microskool-outline-button'>
        <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon> Sign Up
        </button>   
        </Link>

</div>
    </div>

</div>

    </>
  )
}

export default Login
