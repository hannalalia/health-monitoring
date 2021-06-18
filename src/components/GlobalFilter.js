import React from "react";
import {Form} from 'react-bootstrap'

function GlobalFilter({filter, setFilter}) {
    return ( 
        <span>
            <Form.Control className="w-25" type = "text" placeholder="Search" value={filter||''} 
            onChange={e=> setFilter(e.target.value)}>
            </Form.Control>
        </span>
    );
}
 
export default GlobalFilter;