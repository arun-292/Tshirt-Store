import React, { useState, useEffect } from 'react';
import "../style.css";
import { API } from '../backend';
import Base from './Base';
import Card from './Card';
import getProducts from './helper/coreApiCalls';


function Home(){

    const [products,setProducts] = useState([]);
    const [error,setError] = useState(false);

    function loadAllProduct(){
         getProducts().then(data=>{
              if(data.error){
                   setError(data.error)
              }
              else{
                   setProducts(data)
              }
         })
    }
    useEffect(()=>{
         loadAllProduct()
    },[])
     
    return (
    <Base title="Home page" description="Welcome to the tshirt Store">
       <div className="row text-center">
           
               <div className="row">
               {
                    products.map((prod,index)=>{
                         return(
                         <div className="col-4 mb-4" key={index}>
                              <Card product={prod}/>
                         </div>
                         )
                    })
               }
               </div>           
       </div>
    </Base>
    )
}

export default Home;