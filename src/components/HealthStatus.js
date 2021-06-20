import React, {useMemo} from 'react';
import {Table,Button, Form} from 'react-bootstrap';
import {useTable,useSortBy, useGlobalFilter, usePagination} from 'react-table';
import { MdExpandMore,MdExpandLess } from "react-icons/md";
import { BiSort } from "react-icons/bi";
import GlobalFilter from './GlobalFilter';

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
            },
            {
                "id": 8,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 9,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 10,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 11,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 12,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 13,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 8,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 9,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 10,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 11,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 12,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 13,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 8,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 9,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 10,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 11,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 12,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 13,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 8,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 9,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 10,
                "date": "June 22, 2021",
                "fever": false
            },
            {
                "id": 11,
                "date": "June 20, 2021",
                "fever": false
            },
            {
                "id": 12,
                "date": "June 21, 2021",
                "fever": false
            },
            {
                "id": 13,
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
            accessor: 'date'
          },
          {
            Header: 'Fever',
            accessor: 'fever',
            disableFilters: true,
            disableSortBy: true,
            Cell:({value})=>{
                return value ? "Yes":"No"
            }
          },
        ],
        []
      )
    const tableInstance = useTable({ columns, data },useGlobalFilter,useSortBy,usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage, 
        canPreviousPage,
        pageOptions,
        gotoPage,
        setPageSize,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter
      } = tableInstance

    const {globalFilter, pageIndex,pageSize} = state;
    
    return (   
    <div>       
        <h3 className="my-3">List of Daily Health Status</h3>
        <div className="mx-2 row justify-content-between">
            <Form.Control as="select" className="my-2 col-12 col-sm-3" value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
            {
                    [10,25,50,100].map(pageSize=>(
                        <option key={pageSize} value={pageSize}> Show {pageSize} entries</option>
                    ))
                }
            </Form.Control>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
        </div>
        
        <Table striped bordered className="my-3"{...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                            {column.canSort? (column.isSorted ? (column.isSortedDesc ? (<MdExpandMore/>): (<MdExpandLess/>)):(<BiSort/>)):'' }
                        </span>
                        
                    </th>
                    ))
                }
                </tr>
                ))
            }
            </thead>
            <tbody  {...getTableBodyProps()}>
            {
                page.map(row => {
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
        <div className="d-flex justify-content-between">
                {pageOptions.length>0 ?
                    (<span>Page{' '} {pageIndex + 1} of {pageOptions.length}</span>) :  (<span>Page 0 of 0 </span>)
                } 
            <div>
                <Button variant="info mx-2" size="sm" onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'First'}</Button>
                    {   
                        
                        pageOptions.map(index =>{
                            if(pageOptions.length>2){
                                return(<Button variant="info mx-2" size="sm"
                                onClick={(e)=>{
                                    gotoPage(index);
                                }}>{index+1}</Button>)
                            }
                        })
                    }
                <Button variant="info mx-2" size="sm" onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'Last'}</Button>
            </div>              
        </div>
    </div> 
    );
}
 
export default HealthStatus;