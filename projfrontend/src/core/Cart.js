import React, { useState, useEffect } from 'react';
import "../style.css";
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/CartHelper';
import StripeCheckout from './StripeCheckout';

export default function Cart(){
     
    const [products,setProducts] = useState([])
    const [reload,setReload] = useState(false)
    
    useEffect(()=>{
        setProducts(loadCart())
    },[reload])

    function loadAllProducts(){
        return (
            <div>
                <h2>this section is to load products</h2>
                {
                    products.map((prod,index)=>(  
                        <Card key={index} product={prod} addtoCart={false} removeFromCart={true} setReload={setReload} reload={reload}/>
                    ))
                }
                
            </div>
        )
    }
    function loadCheckout(){
        return (
            <div>
                <h2>this section is for checkout</h2>
            </div>
        )
    }



    return (
    <Base title="Cart page" description="Ready to Checkout" >
        <div className="row text-center">
            <div className="col-6">{loadAllProducts()}</div>
            <div className="col-6"><StripeCheckout products={products} setReload={setReload}/></div>
        </div>
       
    </Base>
    )
}
