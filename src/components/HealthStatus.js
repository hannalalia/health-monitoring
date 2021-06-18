import React, {useMemo} from 'react';
import {Table} from 'react-bootstrap';
import {useTable} from 'react-table';


function HealthStatus() {
    const data = useMemo(
        () => [
            {
                "id": 1,
                "date": "June 17, 2021",
                "fever": false
            },
            {
                "id": 2,
                "date": "June 16, 2021",
                "fever": false
            },
            {
                "id": 3,
                "date": "June 18, 2021",
                "fever": true
            },
            {
                "id": 4,
                "date": "June 19, 2021",
                "fever": true
            },
            {
                "id": 5,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 6,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 7,
                "date": "June 22, 2021",
                "fever": false
            }
        ],
        []
      )
    
      const columns = useMemo(
        () => [
          {
            Header: 'Date',
            accessor: 'date', 
          },
          {
            Header: 'Fever',
            accessor: 'fever',
          },
        ],
        []
      )
    const tableInstance = useTable({ columns, data });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
    return (   
    <div>
        <h3 className="my-3">List of Daily Health Status</h3>
        <Table striped bordered className="my-3"{...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                        {
                        column.render('Header')
                        }
                    </th>
                    ))
                }
                </tr>
                ))
            }
            </thead>
            <tbody  {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()}>
                                {
                                cell.render('Cell')
                                }
                                </td>
                            )
                            })
                        }
                    </tr>
                    )
                })
            }            
            </tbody>
        </Table>
    </div> 
    );
}
 
export default HealthStatus;