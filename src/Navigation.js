import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import SelectedProduct from './components/SelectedProduct';
import useFetchProducts from './customerHook/useFetchProdcts';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';

function Navigation() { 
    //fetching once
    const fetchProducts = useFetchProducts();
    return (
        <React.Fragment>
              <BrowserRouter>
           <Switch>
           <Route path="/page/aboutus" exact>
                   <AboutUs/>
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
