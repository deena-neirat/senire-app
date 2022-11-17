import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Card, Container, Row ,Col ,Table} from "react-bootstrap";
import '../stlyes/style.css';

function Surgery() {
  return (
    <Container className="mt-3" id="Surgery">
        <Card className="m-2 p-4 shadow">
            <Card.Header className="p-3 m-4" >
                <h4 className="assi2" >Medical Clinics / Surgery</h4>
            </Card.Header>

         <Accordion  className="m-2 p-2">
            <Accordion.Item eventKey="0">
            <Accordion.Header> Section 1 <span className="mx-5" style={{textAlign:'center'}}> Sunday / Tuesday </span>  <span style={{textAlign:'right'}}>9-11 o'clock</span>  </Accordion.Header>
            <Accordion.Body>
            <Row className="m-1">
              <Col className="m-2">
                <Table striped bordered hover className="shadow-lg text-center">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>available</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>                       
                  </tbody>
                </Table>
             </Col>
          </Row>
            </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header> Section 2 <span className="mx-5" style={{textAlign:'center'}}> Wensday / Thursday </span>  <span style={{textAlign:'right'}}>2-4 o'clock</span>  </Accordion.Header>
        <Accordion.Body>
        <Row className="m-1">
              <Col className="m-2">
                <Table striped bordered hover className="shadow-lg text-center">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>available</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>
                  <tr>
                     <td>201810565</td>
                     <td>Deena Waleed</td>
                     <td>available</td>
                  </tr>                       
                  </tbody>
                </Table>
             </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
    </Container>
  );
}

export default Surgery;