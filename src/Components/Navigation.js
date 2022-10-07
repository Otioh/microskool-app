import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faBookOpen, faBookReader, faClock, faCalculator, faListAlt, faUser, faSearch, faGear } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import MicroskoolIcon from '../Images/micro.png';

function Navigation() {
  return (
    <div className='navigation shadow'>
<div className='menu-icon'>
<img alt='logo' src={MicroskoolIcon}/>
</div>
      Microskool
<br/><br/><hr/>

<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
</div>
<div className='item-text'>
Search
</div>
</div>



<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
</div>
<div className='item-text'>
Dashboard
</div>
</div>


<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon>
</div>
<div className='item-text'>
General Studies
</div>
</div>



<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
</div>
<div className='item-text'>
Assignments
</div>
</div>



<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
</div>
<div className='item-text'>
Schedule
</div>
</div>



<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon>
</div>
<div className='item-text'>
Calculator
</div>
</div>


<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon>
</div>
<div className='item-text'>
Reference
</div>
</div>


<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
</div>
<div className='item-text'>
Profile
</div>
</div>



<div className='menu-item'>
<div className='menu-icon'>
    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
</div>
<div className='item-text'>
Settings
</div>
</div>




    </div>
  )
}

export default Navigation
