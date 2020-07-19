import React from 'react';
import { API } from '../../backend';

export default function getProducts(){
    return fetch(`${API}/products`,{
        method:"GET"
    })
    .then(Response=>{
        return Response.json()
    })
    .catch(err=>console.log(err))
}