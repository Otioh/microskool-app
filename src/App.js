import './App.css';
import Login from './Components/Login';
import { Route, Routes} from 'react-router-dom';
import Signup from './Components/Signup';
import { useState } from 'react';
import Dashboard from './Components/Dashboard';
import {funex, sum} from 'flame-tools';

function App() {
  const [alert, setalert] = useState({
    msg:"Enter your details",
    cap:"Welcome",
    type:"info",
    status:false
   });
   sum()
  return (
<>
<Routes>
  <Route path='/' element={<Login alert={alert} setalert={setalert} />} />
  <Route path='/login' element={<Login alert={alert} setalert={setalert} />} />
  <Route path='/signup' element={<Signup alert={alert} setalert={setalert} />} />
  <Route path='/dashboard' element={<Dashboard alert={alert} setalert={setalert} />} />

</Routes>

</>  );
}

export default App;
