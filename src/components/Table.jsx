import { Button } from 'react-bootstrap'
import React,{useEffect} from 'react'
import {Table as TableComponent} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";

function Table({products}) {
    const deleteItem  = async (id)=>{
       // alert(id)
        //delete
        const url =`http://localhost:5000/fooditemdelete/${id}`
        try{
               const _delete = await Axios.delete(url);
        }
        catch(error){
            console.log(error.message)
        }
        

    }
    useEffect(()=>{

    },[products])
    return (
        <TableComponent striped bordered hover variant="light">
  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>QUANTITY</th>
      <th>DELETE</th>
      <th>UPDATE</th>
      <th>BUY</th>
    </tr>
  </thead>
  <tbody>
    
        {
            products.map(item=>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>
                  <Button onClick={()=>deleteItem(item.id)} >Delete</Button>
              </td>
              <td>
                  <Link to={`/page/update/${item.id}`}>
                  <Button>Update</Button>

                  </Link>
                  
              </td>
              <td>
                  <Button>Buy</Button>
              </td>
            </tr>)
        }

    


  </tbody>
</TableComponent>
    )
}

export default Table
