import React from "react";
import '../stlyes/style.css';
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import img14 from "../images/img14.png";
import img13 from "../images/img13.jpg";

import Carousel from 'react-bootstrap/Carousel';

function Treatment() {
  return (
    <div id="treat">
      <div className="container shadow-lg">
            <div className="row">
                <div className="col-12">
                    <div className="intro shadow-lg my-3 ">
                        <h1>University Clinics</h1>
                        <p className="mx-auto">There are many clinics available at the Arab American University in which you can be treated.</p>
                    </div>
                </div>
            </div>
        </div>
      <Carousel variant="dark ">
        <Carousel.Item>
        <img 
          className="d-block w-100 simg"
          src={img8}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="bord">
          <h5 className="bord-title">Kids Clinic</h5>
          <p>Providing all treatment services for children from tooth extraction, tooth decay and others....</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 simg"
          src={img9}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="bord">
          <h5 className="bord-title">Endodontics</h5>
          <p>Root canal is one of the curative medical procedures in the dental world. This type of treatment is used to save a tooth that is almost eroded from decay, or to save a tooth that has been exposed to inflammation or severe damage. This treatment targets the dental nerve core that is located inside the root canal of the tooth. From a combination of nerves and blood vessels.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 simg"
          src={img12}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="bord">
          <h5 className="bord-title">Conservative</h5>
          <p>Dental preservation treatment is used for visible teeth and is a prosthetic treatment. In these treatments, parts of the tooth that have been damaged due to decay or other reasons are cleaned and removed.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100 simg"
          src={img13}
          alt="Four slide"
        />
        <Carousel.Caption>
          <div className="bord">
            <h5 className="bord-title">Periodontics</h5>
            <p>Periodontal disease is the medical term for gum disease. It can be used to refer to the entire gamut of periodontal disease</p>
          </div>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 simg"
          src={img14}
          alt="Five slide"
        />
        <Carousel.Caption>
          <div className="bord">
          <h5 className="bord-title">Surgery</h5>
          <p>Surgery is one of the medical specialties that relies on manual procedures and technical tools applied to patients, in order to treat or verify the presence of tissue damage that may occur as a result of some diseases or injury. The surgical procedure aims to improve the functionality or appearance of the organ.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 simg"
          src={img11}
          alt="Six slide"
        />
        <Carousel.Caption>
          <div className="bord">
          <h5 className="bord-title">Prosthodontics</h5>
          <p>Prosthodontics is the replacement of missing teeth and the tissue surrounding the teeth with artificial materials</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    
  );
}

export default Treatment;