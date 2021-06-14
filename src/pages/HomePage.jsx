import { Button } from 'react-bootstrap';
import React ,{useEffect}from 'react';
import Header from "../components/Header";
import Products from '../components/Products';
import SpinnerComponent from '../components/spinner';
import Table from "../components/Table";
import {Link} from "react-router-dom"

function HomePage({products}) {
    useEffect(() => {
        
    }, [products])
    return (
        <div style={{margin:10}}>
            <Header/>

            <br/>
            <h1 style={{
                margin:30,
                textAlign:"center"
            }}>Our Products</h1>
            <div >
                <Link to="/page/add">
                
                <Button>Add Product</Button>
                </Link>
            </div>
<br/>
            {
                products == null?<SpinnerComponent/>
                :
                <Table products={products}/>

            }
            
        </div>
    )
}

export default HomePage;
