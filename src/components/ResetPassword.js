import React from 'react';
import {Form} from 'react-bootstrap'

function ResetPassword() {
    return (
        <Form className="mx-auto mt-5 p-5">
            <Form.Control type="email" placeholder="Email Address"></Form.Control>
            <Form.Control type="submit" className="btn btn-success mt-2" value="Reset Password"></Form.Control>
        </Form>
    )
}

export default ResetPassword;
