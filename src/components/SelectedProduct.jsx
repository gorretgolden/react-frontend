import React ,{useState, useEffect}from 'react';
import {useParams,} from "react-router-dom"
import {Card, Image, Button} from "react-bootstrap";
import Currency from 'react-currency-formatter';

function SelectedProduct({products}) {
    console.log(products)
    const {product} = useParams();
    console.log(product)
    const [selected, setSelected] = useState(null)
    useEffect(()=>{
       
       setSelected(products.find(element=>element.name==product));
    },[])

    return (
        <div style={{
            display:"grid",
            placeItems:"center",
            marginTop:50
        }}>
             <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={selected?.image} />
  <Card.Body>
  <Card.Title>{selected?.name}</Card.Title>
  <Card.Text 
     
     >
      {selected?.description}
    </Card.Text>
      <Currency
       quantity={Math.floor(selected?.net_price)}
       currency="UGX"
      />
    <Card.Text>
        
    </Card.Text>
    

    
    <Button variant="primary" width="100%"> 
    Confirm Payment
    </Button>
    
    

  </Card.Body>
</Card>
        </div>
    )
}

export default SelectedProduct
