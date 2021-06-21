import React from 'react';
import {Form} from 'react-bootstrap'

function DBChangePassword() {
    return (
        <div className="mx-auto mt-5 p-2">
            <h3 className="h3 text-center">Change Password</h3>
            <Form className="mx-auto p-4">
                <Form.Group>
                    <Form.Control type="email" placeholder="Username or Email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="Current Password"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="New Password"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="Confirm Password"></Form.Control>
                </Form.Group>  
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <Form.Control className="btn btn-success w-auto" type="submit" value="Save"></Form.Control> 
                    <a href="/Reset" className="text-muted">Forgot Password</a> 
                </div>        
            </Form>
        </div>
    )
}

export default DBChangePassword
