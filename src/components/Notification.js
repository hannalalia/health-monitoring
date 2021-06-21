import React from 'react'
import {Alert,Table} from 'react-bootstrap'

function Notification({heading,reason,start,end,place}) {
    return (
        <div>
            <Table bordered className="mt-3" >
                <thead style={{backgroundColor:"#dc3546", color:"white"}}>
                    <tr>
                        <td colSpan="100%"><h5 className="h5">{heading}</h5></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Reason</td>
                        <td>{reason}</td>
                    </tr>
                    <tr>
                        <td>Start of Quarantine</td>
                        <td>{start}</td>
                    </tr>
                    <tr>
                        <td>End of Quarantine</td>
                        <td>{end}</td>
                    </tr>
                    <tr>
                        <td>Place</td>
                        <td>{place}</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default Notification
