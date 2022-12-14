import React, { useState , useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MicroskoolIcon from '../Images/micro.png';
import {faLock, faKey, faUserLock} from '@fortawesome/free-solid-svg-icons';
import Alert from './Alert';
import {Link} from 'react-router-dom';



function Signup({alert, setalert}) {
   const [email, setEmail]= useState("");
   const [password, setpassword] = useState("");
   const [fname, setfname] = useState("");
   const [surname, setsurname] = useState("");
   const [phone, setphone] = useState("");
   const [matric, setmatric] = useState("");
   const [passwordConfirm, setpasswordConfirm] = useState("");
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
Create Account
</text>
</div>
<div className='card-body'>
<Alert msg={alert.msg} cap={alert.cap} type={alert.type} status={alert.status} />

<input type='text' className='form-control' value={fname} placeholder='First Name' onChange={(e)=>{
setfname(e.target.value)
}} />

<input type='text' className='form-control' value={surname} placeholder='Surname' onChange={(e)=>{
setsurname(e.target.value)
}} />


<input type='text' className='form-control' value={matric} placeholder='Matric No' onChange={(e)=>{
setmatric(e.target.value)
}} />


<input type='tel' className='form-control' value={phone} placeholder='Phone' onChange={(e)=>{
setphone(e.target.value)
}} />



<input type='email' className='form-control' value={email} placeholder='E-Mail' onChange={(e)=>{
setEmail(e.target.value)
}} />



<input type='password' className='form-control' value={password} placeholder='Password ' onChange={(e)=>{
setpassword(e.target.value)
}} />



<input type='password' className='form-control' value={passwordConfirm} placeholder='Confirm Password ' onChange={(e)=>{
setpasswordConfirm(e.target.value)
}} />

</div>
<div className='card-footer'>

<button className='btn microskool-button'>
        <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon> Sign Up
        </button>
        <Link to='/login'>
        <button className='btn microskool-outline-button'>
        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Login?
        </button>   
</Link>
</div>
    </div>

</div>

    </>
  )
}

export default Signup
