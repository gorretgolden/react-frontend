
import {useState, useEffect} from "react"
import Axios from "axios";
 const useFetchProducts = ()=>{
     //fake api
    const url = 'http://localhost:5000/allfooditems';
    const [products, setProducts] = useState(null)
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                //double destructuring
                const {data} = await Axios.get(url)
                //console.log(data)
                 setProducts(data)

            }
            catch(error){
                console.log(`Error is :${error.message}`)
            }
        }
        fetchProducts()
   // console.log('am running first')
    },[])

     return products
 }
 export default useFetchProducts;