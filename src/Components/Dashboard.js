import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faDashboard, faBookOpen,  faBookAtlas, faBookReader, faClock, faCalculator, faListAlt, faUser,faCoins, faSearch, faGear } from '@fortawesome/free-solid-svg-icons';
import Alert from './Alert';
import Navigation from './Navigation';

function Dashboard() {
  return (
    <>
    <Navigation/>
    <div className='board'>

   
    <div className='container'>
        <Alert status={true} type='info' msg={`to your Dashboard`} cap={`Welcome`} />
<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
  <span className='icon'> <span className='icon'>  <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon></span></span>
Dashboard
</div>

<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
<span className='icon'> <span className='icon'>  <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon></span></span>
General Studies
</div>
<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
<span className='icon'> <span className='icon'>  <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon></span></span>
Assignments
</div>
<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faBookAtlas}></FontAwesomeIcon></span>
Past Questions
</div>
<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon></span>
Lecture Schedule
</div>


<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon></span>
GPA Calculator
</div>

<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon></span>
Course Reference
</div>

<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
Profile
</div>


<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon></span>
Earnings
</div>

<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faGear}></FontAwesomeIcon></span>
Settings
</div>

<div className='card shadow grid-menu' style={{height:'120px', width:'120px'}}>
   <span className='icon'>  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
Search
</div>
</div>
    </div>
    
    </>
  )
}

export default Dashboard
