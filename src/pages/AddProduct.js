import React,{useState, useEffect} from 'react'
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import Axios from "axios";
import {Redirect, useHistory} from "react-router-dom"
function AddProduct() {
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const  [qty, setQty] = useState(null);
    const history = useHistory();

    const [disabled, setDisabled] = useState(false)

    //add
    const addProduct = async (e)=>{
         setDisabled(true)
        e.preventDefault();
        const url = 'http://localhost:5000/addfooditem'
        //run a use fetch
                try{
                    //double destructuring
                    const {data} = await Axios.post(url,{
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
        <div style={{margin:6}}>
            

            <h3 style={{textAlign:"center"}}>Add product</h3>

            <Form style={{padding:4,display:'flex',marginLeft:6,marginRight:6,flexDirection:"column",alignItems:'center',justifyContent:"space-between",border:"2px solid black"}}>
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
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" 
                    value={qty}
                    name="qty"
                    onChange={(e)=>setQty(e.target.value)}
                    placeholder="add quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                   <Button type="submit" 
                    onClick={addProduct}
                    disabled ={disabled}
                   >Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddProduct
