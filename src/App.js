import './App.css';
import React from 'react';
import { Routes,Route,Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Secretary from './components/secretary-page/secretary';
import Dental from './components/dental-assistant/dental-assistant';
import Deoctor from './components/Doctor-page/doctor';
import Paedodontics from './components/paedodontics/Paedodontics';
import Endodontics from './components/Endodontics/Endodontics';
import Conservative from './components/Conservative/Conservative';
import Surgery from './components/Surgery/surgery';
import Prosthodontics from './components/Prosthodontics/Prosthodontics';
import Perodontics from './components/Perodontics/Perodontics';
import Home from './components/home/home';
import Student from './components/student/student';


function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/'  element={<Navbar/>} >
           <Route index element ={<Home/>} />
           <Route path='/assistent'  element={<Dental/>}/>
           <Route path='/doctor'  element={<Deoctor/>}/>
           <Route path='/secretary'  element={<Secretary/>}/>
           <Route path='/surgery'  element={<Surgery/>}/>
           <Route path='/perodontics'  element={<Perodontics/>}/>
           <Route path='/prosthodontics'  element={<Prosthodontics/>}/>
           <Route path='/conservative'  element={<Conservative/>}/>
           <Route path='/Endodontics'  element={<Endodontics/>}/>
           <Route path='/Paedodontics'  element={<Paedodontics/>}/>
           <Route path='/student' element={<Student/>}/>
        </Route>
      </Routes>

      {/* <Routes>
        <Route  path='/' element={<Navbar/>}>
          <Route  path='/' element={<Secretary/> }/>
          <Route  path='/' element={<Dental/>}/>
          <Route  path='/' element={<Deoctor/>}/>
          <Route  path='/' element={<Paedodontics/>}/>
          <Route  path='/' element={<Endodontics/>}/>
          <Route  path='/' element={<Conservative/>}/>
          <Route  path='/' element={<Surgery/>}/>  
          <Route  path='/' element={<Prosthodontics/>}/>
          <Route  path='/' element={<Perodontics/>}/>  
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
