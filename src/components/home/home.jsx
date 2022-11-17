import React from "react";
import '../stlyes/style.css';
import About from "../about/about";
import Treatment from "../treatment/treatment";
import Footer from "../footer/footer";

function Home(){
    return(
     <section id='home'>
        <div className="slide slide1 ">
            <div className="container" height="500%">
                <div className="row">
                    <div className="col-12 text-center text-white">
                        <h1 className=" my-5 py-5 text" >Healthy Teeth <br /><small>With AAUP</small></h1>
                    </div>
                </div>
            </div>
        </div>  
        <About/>
        <Treatment/>
        <Footer/>
     </section>
    )
}

export default Home;