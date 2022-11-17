import React ,{useEffect, useState} from "react";
import axios from 'axios';
import img3 from "../images/img3.png"
import '../stlyes/style.css';
import { Card, Container, Row ,Col, Table} from "react-bootstrap";


// const Secretary = ({category}) => {
//     const { name , username , email , address, phone} = category
//     return (
//         <div className="container">
//           <div>
//          <Table striped bordered hover className="shadow-lg text-center">
//                    <thead>
//                      <tr>
                       
//                        <th>Name</th>
//                        <th>User Name</th>
//                        <th>Email</th>
//                        <th>Address</th>
//                        <th>Phone</th>
//                      </tr>
//                    </thead>
//                    <tbody>
//                      { 
//                        <tr >
                        
//                          <td>{name}</td>
//                          <td>{username}</td>
//                          <td>{email}</td>
//                          <td>{address}</td>
//                          <td>{phone}</td>    
//                         </tr>
//                             }
//                    </tbody>
//                 </Table>

//           </div>
//         </div>
//     )
// }
function Secretary(){


    const [activities , setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function loadActivity(){
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setActivities(data);
            setIsLoading(false)

      });
    }

    useEffect(() =>{
      console.log("here")
        loadActivity();
        // return function() {
        //   //code
        // }
    },[])

    if(activities.length===0){
        return <p>Loading...</p>
    }
    
    return (
        <>
        <Container className="mt-3" id="secretary">
        <Card className="m-4 p-4 shadow" >
                    <Card.Header className="p-3 my-3" >
                        <h4 className="assi2" >personal information</h4>
                    </Card.Header>
                    <Card.Body className='shadow p-4'>
                        <div className="row m-2 ">
                            <div className="col-3 assi">
                               <p>Secretary Name :</p>
                               <p>College Name :</p> 
                               <p>Identification Number :</p>  
                            </div>
                            <div className="col-4 assi">
                                <p>201810566</p>
                                <p>Donia Waleed Nairat</p>
                                <p>Faculty of Dentistry</p>    
                            </div>
                            <div className="col-4">
                            <img src={img3} alt="error" width='50%' height='100%'/>
                            </div>
                        </div>
                    </Card.Body>
                   </Card>

        
            <Card className="m-4 p-4 shadow">
            <Card.Header className="p-3 my-3" >
               <h3 className="assi2">Patient reservations</h3>
            </Card.Header>
            </Card>  
       
            <Row className="m-1">
              <Col className="m-2">
                <Table striped bordered hover className="shadow-lg text-center">
                  <thead>
                    <tr>
                      <th>SNO</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Website</th>
                      <th>Company</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    { activities.map((activity) =>{
                      return <tr key={activity.id}>
                                <td>{activity.id}</td>
                                <td>{activity.name}</td>
                                <td>{activity.email}</td>
                                <td>{activity.website}</td>
                                <td>{activity.company.name}</td> 
                                 <td>{activity.address.city}</td>
                               </tr>
                           })}
                  </tbody>
                </Table>
             </Col>
          </Row>
        </Container>
       </>          
   )
}

 export default Secretary;



  
