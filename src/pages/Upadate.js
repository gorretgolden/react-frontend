import React,{useState, useEffect} from 'react'
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import Axios from "axios";
import {Redirect, useHistory, useParams} from "react-router-dom"
function UpdateProduct({products}) {

    const history = useHistory();
    //paramaters
    const {id} = useParams();
    const findProduct = products.find(item=>item.id==id)
    console.log(findProduct)
    const [name, setName] = useState(findProduct?.name)
    const [price, setPrice] = useState(findProduct?.price)
    const  [qty, setQty] = useState(findProduct?.qty);

    const [disabled, setDisabled] = useState(false)

    //add
    const update = async (e)=>{
         setDisabled(true)
        e.preventDefault();
        const url = `http://localhost:5000/fooditemupdate/${id}`
        //run a use fetch
                try{
                    //double destructuring
                    const {data} = await Axios.patch(url,{
                        name,
                        price,
                        qty
                    })

    
                }
                catch(error){
                    console.log(`Error is :${error.message}`)
                }
                setName("");
                setPrice(null);
                setQty(null)
                setDisabled(false)
            
            
        history.push("/");


    }
    return (
        <div>
            <h3>Add product</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email"
                     value={name}
                     name="name"
                     onChange={(e)=>setName(e.target.value)}
                     placeholder="add product name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" 
                                         value={price}
                                         name="price"
                                         onChange={(e)=>setPrice(e.target.value)}
                    placeholder="add price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" 
                                                             value={qty}
                                                             name="qty"
                                                             onChange={(e)=>setQty(e.target.value)}
                    placeholder="add qty" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                   <Button type="submit" 
                    onClick={update}
                    disabled ={disabled}
                   >Update</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default UpdateProduct
