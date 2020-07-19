import React, { useState, useEffect } from 'react';
import ImageHelper from './helper/ImageHelper';
import addItemToCart, { RemoveItemFromCart } from './helper/CartHelper';
import {Redirect} from 'react-router-dom'

export default function Card({product,addtoCart=true,removeFromCart=false,setReload=f=>f /*function(f){return f}*/,reload=undefined}){

    const [redirect,setRedirect] = useState(false);
    const [count,setCount] = useState(product.count)
    const cardTitle = product? product.name: "A photo from my collection"
    const cardDescription = product? product.description: "default description"
    const cardPrice = product? product.price: "DEFAULT"

    function addToCart(){
        addItemToCart(product, ()=>setRedirect(true))
    }

    function getRedirect(redirect){
        if(redirect){
            return <Redirect to="/cart"/>
        }
    }
    function showAddToCart(addtoCart){
        return (
        
        addtoCart && (
        <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
        >
        Add to Cart
        </button>
        ))
    }
    function showRemoveFromCart(removeFromCart){
        return(
            removeFromCart && (
                <button
                    onClick={() => {
                      RemoveItemFromCart(product._id)
                      setReload(!reload)
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
            )
        )
    }

        return (
          <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cardTitle}</div>
            <div className="card-body">
                {getRedirect(redirect)}
              <ImageHelper product={product}/>
              <p className="lead bg-success font-weight-normal text-wrap">
                {cardDescription}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">${cardPrice}</p>
              <div className="row">
                <div className="col-12">
                    {showAddToCart(addtoCart)}
                </div>
                <div className="col-12">
                    {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div>
        );
      };
