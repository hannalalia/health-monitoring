import React from "react";
import {Container, Jumbotron} from 'react-bootstrap'

function Error(){
    return ( 
        <Container fluid>
            <Jumbotron className="text-center w-75 mx-auto mt-5">
                <img src="assets/404.svg" className="img-fluid"></img>
                <h1>Page Not Found</h1>
            </Jumbotron>
        </Container>
     );
}
 
export default Error;