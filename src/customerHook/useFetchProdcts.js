 
import {useState, useEffect} from "react"
import Axios from "axios";
 const useFetchProducts = ()=>{
     //fake api
    const url = 'https://fakerapi.it/api/v1/products?_quantity=25';
    const [products, setProducts] = useState(null)
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                //double destructuring
                const {data:{data}} = await Axios(url)
                console.log(data)
                 setProducts(data)

            }
            catch(error){
                console.log('errorS')
            }
        }
        fetchProducts()
   // console.log('am running first')
    },[])

     return products
 }
 export default useFetchProducts;