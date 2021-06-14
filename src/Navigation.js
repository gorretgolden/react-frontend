import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Header from './components/Header';
import SelectedProduct from './components/SelectedProduct';
import useFetchProducts from './customerHook/useFetchProdcts';
import AddProduct from './pages/AddProduct';
import HomePage from './pages/HomePage';
import UpdateProduct from './pages/Upadate';

function Navigation() { 
    //fetching once
    const fetchProducts = useFetchProducts();
    console.log(fetchProducts)
    return (
        <React.Fragment>
              <BrowserRouter>
           <Switch>
           <Route path="/page/add" exact>
               <Header/>
                   <AddProduct/>
               </Route>
               <Route path="/page/update/:id">
                   <Header/>
                   <UpdateProduct products={fetchProducts}/>
               </Route>

               <Route path="/:product">
                   <SelectedProduct products={fetchProducts}/>
               </Route>

               <Route path="/">
                   <HomePage products={fetchProducts}/>
               </Route>
           </Switch>
       </BrowserRouter>


        </React.Fragment>
         
    )
}

export default Navigation
