import React from 'react';
import {Button, Card, Row, Col, Table, Badge, Accordion} from 'react-bootstrap';
import {BiCalendar, BiHealth} from "react-icons/bi";
import Notification from './Notification';

function Dashboard(){
    return(
        <div>
            <Row>
                <Col xl={4}>
                    <Card className="my-3">
                        <Card.Img variant="top rounded-circle p-5 m-auto" style={{maxWidth:"500px"}}src="https://picsum.photos/500/500" />
                        <Card.Body>
                            <Card.Title align="center">Employee Name</Card.Title>
                            <Card.Text align="center">
                            Employee Description
                            </Card.Text>
                            <a className="btn btn-success w-100 mb-2 d-flex align-items-center justify-content-center" href="https://ee.kobotoolbox.org/x/YqSOoDyT"><BiHealth className="mr-1"></BiHealth>Add Entry</a>
                            <Button variant="danger w-100 d-flex align-items-center justify-content-center"><BiCalendar className="mr-1"></BiCalendar>Covid-19 Infection History</Button>
                        </Card.Body>
                    </Card>
                    <Table>
                        <thead>
                            <tr>
                                <th>Summary of Today's Entry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Daily Health Status <Badge variant="warning text-light float-right p-2">No entry</Badge></td>
                            </tr>
                            <tr>
                                <td>Exposure to be Validated <Badge variant="danger float-right p-2">For Validation</Badge></td>
                            </tr>
                            <tr>
                                <td>Travel Reports <Badge variant="success float-right p-2">None</Badge></td>
                            </tr>
                            <tr>
                                <td>Waiting for RT-PCR Test Result<Badge variant="success float-right p-2">None</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Notification heading="Person Currently in Quarantine" reason="Known Exposure"start="June 16,2021" end="July 10,2021" place="Home Quarantine"></Notification>
                        </Col>                
                    </Row>
                    <Row>
                        <Col lg={6} md={12}>
                            <Card className="my-3 bg-success text-light">
                            <Card.Body>
                                <img className="float-left mr-3 d-none d-sm-block"style={{maxWidth:"100px"}}src="https://picsum.photos/500/500"/>
                                <Card.Title >List of Daily Health Status</Card.Title>
                                <Card.Text >
                                Number of Entries: 0
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={12}>
                            <Card className="my-3 bg-danger text-light">
                            <Card.Body>
                                <img className="float-left mr-3 d-none d-sm-block"style={{maxWidth:"100px"}}src="https://picsum.photos/500/500"/>
                                <Card.Title >List of Exposure Reports</Card.Title>
                                <Card.Text>
                                Number of Entries: 0
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>   
                    </Row>
                    <Row>
                        <Col lg={6} md={12}>
                            <Card className="my-3 bg-primary text-light">
                            <Card.Body>
                                <img className="float-left mr-3 d-none d-sm-block"style={{maxWidth:"100px"}}src="https://picsum.photos/500/500"/>
                                <Card.Title >List of RT-PCR Tests</Card.Title>
                                <Card.Text >
                                Number of Entries: 0
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={12}>
                            <Card className="my-3 bg-warning text-light">
                            <Card.Body>
                                <img className="float-left mr-3 d-none d-sm-block"style={{maxWidth:"100px"}}src="https://picsum.photos/500/500"/>
                                <Card.Title >List of Travel Reports</Card.Title>
                                <Card.Text>
                                Number of Entries: 0
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>   
                    </Row>  
                    <Row>
                        <Col>
                        <Accordion defaultActiveKey="0">
                            <Card style={{borderTop:".2rem solid #27a844"}}>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Welcome to NNC Health Monitoring
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Welcome text...</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{borderTop:".2rem solid #fec107"}}>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Guidelines
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>List guidlines here...</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{borderTop:".2rem solid #007aff"}}>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Announcements
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>List announcements here...</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </Col>                             
                    </Row>
                </Col>
            </Row>               
        </div>
    )
}

export default Dashboard;
