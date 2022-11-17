import React from "react";
import img1 from '../images/img1.png';
import '../stlyes/style.css';
import About from "../about/about";
import Treatment from "../treatment/treatment";
import Footer from "../footer/footer";
import Home from "../home/home";
import { Dropdown } from "react-bootstrap";
import Dental from "../dental-assistant/dental-assistant";
import { Routes,Route,Outlet ,Link} from 'react-router-dom';
import Student from "../student/student";

function Navbar (){
    return(
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark back sticky-top" >
        <div className="container">
            <a className="navbar-brand" href="#"><span><img src={img1} width='160px' height='50px'/></span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" style={{color:'white'}} href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"style={{color:'white'}} href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"style={{color:'white'}} href="#treat">Treatment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"style={{color:'white'}} href="#">Create Account</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" style={{color:'white'}}href="#">Sign In</a>
                    </li>

                    {/* <li className="nav-item">
                        <Link to='/assistent '>assistent</Link> */}
                        {/* <a className="nav-link" style={{color:'white'}}href="#">Sign In</a> */}
                    {/* </li> */}

                     <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                Choose
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                               
                                <Dropdown.Item href='assistent'>assistent</Dropdown.Item> 
                                <Dropdown.Item href='doctor'>doctor</Dropdown.Item>
                                <Dropdown.Item href='secretary'>secretary</Dropdown.Item>
                                <Dropdown.Item href="student">student</Dropdown.Item>

                                <Dropdown.Item href="assistant">pationt</Dropdown.Item>
                             
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> 

                </ul>
               
                {/* <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    className="btn btn-brand ms-lg-3" style={{color:'white'}}>Contact</a> */}
            </div>
        </div>
    </nav>

    
    {/* <Home/> */}
    {/* <!-- ABOUT --> */}
    {/* <About/>    */}
    {/* <!--treatment-->*/}
    {/* <Treatment/> */}
    {/* <!--Footer-->*/}
    {/* <Footer/> */}
    
    
    <Outlet/>
    </div>
    )
}

export default Navbar;