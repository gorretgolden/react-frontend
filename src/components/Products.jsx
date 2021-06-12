import React,{useState, useEffect} from 'react';
import Product from "./Product";
import Spinner from "./spinner"
import useFetchProducts from '../customerHook/useFetchProdcts';

const myarray = [1,2,3,4,5,6,4,6,7]

function Products({products}) {
//     //fake api
//     const url = 'https://fakerapi.it/api/v1/products?_quantity=25';
//     const [products, setProducts] = useState(null)
//     useEffect(()=>{
//         const fetchProducts = async()=>{
//             try{
//                 //double destructuring
//                 const {data:{data}} = await Axios(url)
//                 console.log(data)
//                  setProducts(data)

//             }
//             catch(error){
//                 console.log('errorS')
//             }
//         }
//         fetchProducts()
//    // console.log('am running first')
//     },[])
 const fetchProducts = useFetchProducts();
    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap"
        }}>
            {
                products===null?
                <div style={{
                    display:"grid",
                    placeItems:"center",
                    height:"100vh",
                    alignSelf:"center",
                    alignContent:"center",
                    marginLeft:"40%"
                }}>
                    <Spinner/>
                </div>
                :
                products.map(element=><Product products={element}/>)
            }
            
            
        </div>
    )
}

export default Products
