import React from "react";
import '../stlyes/style.css';
import img1 from '../images/img1.png';


function Footer (){
    return(
        <footer className="foot " >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 ">
                        <div className="footer-top text-center">
                            <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <a href="#home"><img src={img1} width='30%' height='50%'/></a>
                                <h4 className="navbar-brand foot m-2 text">Healthy Teeth With AAUP</h4>
                                <p className="foot ">ARAB AMERICAN UNIVERSITY <br/> <br /><span>Contact</span></p>
                            <div className="col-auto conditions-section">
                            </div>
                        </div>

                        <div className="col-6 margin1">
                        <div className="footer-top ">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <a href="mailto:info@example.com" >info@aaup.edu</a>
                                        <i class="fa fa-phone">  +(970) 4 2418888 </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
   
                </div>
            </div>
        </div>
    </div>

            </div>
            
        </footer>
    )
   
}

export default Footer