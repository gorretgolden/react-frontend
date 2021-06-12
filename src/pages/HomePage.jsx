import React from 'react';
import Header from "../components/Header";
import Products from '../components/Products';

function HomePage({products}) {
    return (
        <div>
            <Header/>
            <h1 style={{
                margin:30,
                textAlign:"center"
            }}>Our Products</h1>
            <Products products={products}/>
        </div>
    )
}

export default HomePage;
