import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import {isAuthenticated,signin,authenticate} from "../auth/helper/index"

function Signin(){
    
    const [values,setValues] = useState({

        email: "akash@gmail.com",
        password: "12345",
        error: "",
        loading: false,
        didRedirect: false
    });

    const {email,password,error,loading,didRedirect} = values;

    const {user} = isAuthenticated();

    const handleChange = name => event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, loading:false})
            }
            else{
                authenticate(data,()=>{
                    setValues({...values, didRedirect:true})
                })
            }
        })
        .catch(console.log("signin request failed"));
    };

    const performRedirect=()=>{
        if(didRedirect){
            if(user.role===1){
                return <Redirect to="/admin/dashboard"/>
            }
            else{
                return <Redirect to="/user/dashboard"/>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/"/>
        }
    }

    const loadingMessage=()=>{
        return (
        loading &&(
        <div className="alert alert-info">
            <h2>Loading...</h2>
        </div>)
    )}

    const errorMessage=()=>{
        return(
        <div className="row">
            <div className="col-6 offset-sm-3">
                <div className="alert alert-danger" style={{display:error ? "" : "none"}}>
                     {error}
                </div>
            </div>
        </div>
    )}


    function signInForm(){
        return (
            <div className="row">
                <div className="col-6 offset-sm-3 ">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email : </label>
                            <input type="email" className="form-control" onChange={handleChange("email")} value={email}></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Password : 
                            </label>
                            <input onChange={handleChange("password")} value={password} type="password" className="form-control"></input>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return(
        <Base title="Sign in page" description="A page for user to sign in!">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signin;
