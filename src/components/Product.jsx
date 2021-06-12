import React,{useEffect} from 'react';
import { useState } from 'react';
import {Card, Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Currency from 'react-currency-formatter';

function Product({products:{image, name, description, net_price}}) {
    //console.log(` The eslement`)
    const id =1;
    
    return (
        <div style={{
            marginLeft:40,
            marginRight:30,
            marginTop:10,
            marginBottom:20,
            cursor:"pointer"

        }}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text 
     style={{
        whiteSpace: "nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        width:200
     }}
     >
      {description}
    </Card.Text>
      <Currency
       quantity={Math.floor(net_price)}
       currency="UGX"
      />
    <Card.Text>
        
    </Card.Text>
    <Link to={`/${name}`}>
    <Button variant="primary" width="100%"> 
        Buy
    </Button>
    </Link>
    

  </Card.Body>
</Card>
        </div>
    )
}

export default Product
