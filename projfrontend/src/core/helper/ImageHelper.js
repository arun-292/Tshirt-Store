import React from 'react';
import { API } from '../../backend';



export default function ImageHelper({product}){

   const imageurl= product ?`${API}/product/photo/${product._id}` : `arun`




    return (
        <div className="rounded border border-success p-2">
                <img
                  src={imageurl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
              </div>
    )
}