const { API } = require("../../backend")

export const createOrder=(userId,token,orderData)=>{
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            authorization: `Bearer ${token}`
        },
        body:JSON.stringify({order:orderData})
        .then(response=>{
            return response.json();
        })
        .caatch(err=>console.log(err))
    })
}