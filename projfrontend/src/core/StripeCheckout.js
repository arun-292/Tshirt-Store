import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/CartHelper';
import { Link } from 'react-router-dom';

export default function StripeCheckout({products,setReload=f=>f,reload=undefined}){


    const [data,setData] = useState({
        loading:false,
        success:false,
        error:"",
        address:""
    });
    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user._id

    function geftFinalPrice(){
        let amount = 0
        products.map(p=>{
            amount = amount+p.price
        })
        return amount;
    };

    function showStripeButton(){
        return isAuthenticated() ? (<button className="btn btn-success">pay with stripe</button>) : (<Link to="/signin"><button className="btn btn-warning">signin</button></Link>)
    }

    return(
        <div>
            <h3 className="text-white">Stripe checkout {geftFinalPrice()}</h3>
            {showStripeButton()}
        </div>
    )
}