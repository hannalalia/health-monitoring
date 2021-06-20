import React, {useMemo} from 'react';
import {Table,Button, Form} from 'react-bootstrap';
import {useTable,useSortBy, useGlobalFilter, usePagination} from 'react-table';
import { MdExpandMore,MdExpandLess } from "react-icons/md";
import { BiSort } from "react-icons/bi";
import GlobalFilter from './GlobalFilter';

function RTPCRTest() 
{
    const data = useMemo(
        () => [
           
        ],
        []
      )
    
      const columns = useMemo(
        () => [
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Swabbed Date',
            accessor: 'swabbedDate',
          },
          {
            Header: 'Location',
            accessor: 'location',
          },
          {
            Header: 'Reason for Test',
            accessor: 'reason',
          },
          {
            Header: 'Result',
            accessor: 'result',
          },
          {
            Header: 'Result Date',
            accessor: 'resultDate',
          }
        ],
        []
      )
    const tableInstance = useTable({ columns, data },useGlobalFilter,useSortBy,usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
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
        <h3 className="my-3">RT-PCR Report</h3>
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
            <span>
                Page{' '}
                    {pageIndex + 1} of {pageOptions.length}
            </span>  
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
 
export default RTPCRTest;