import React,{useState} from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import createCategory from './helper/adminapicall'

export default function UpdateCategory(){

    const [name,setNames] = useState("");
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);

    const {user, token} = isAuthenticated();

    function goBack(){
        return(
            <div className="mt-5">
                <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
                    Admin Home
                </Link>
            </div>        
    )
    }

    function handleChange(event){
        setError("");
        setNames(event.target.value)
    }

    function onSubmit(event){
        event.preventDefault();
        setError("");
        setSuccess(false);
        
        //backend request fired

        createCategory(user._id,token,{name})
            .then(data=>{
                if(data.error){
                    setError(true);
                    setNames("");
                }
                else{
                    setError("");
                    setSuccess(true);
                    setNames("");
                }
            })
    }

    function successMsg(){

        if(success){
            return <h4 className="text-success">Category created successfully</h4>
        }
    }
    function ErrorMsg(){
        if(error){
            return <h4 className="text-danger">failed to create category</h4>
        }
    }

    function myCategoryForm(){
        return(
        <form>
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <input className="form-control my-3" onChange={handleChange} value={name} type="text" autofocus required placeholder="For Ex. Summer"/>
                <button className="btn btn-outline-info" onClick={onSubmit}>Create Category</button>
            </div>
        </form>
        )
    }

    return(
        <Base title="Create a category here" description="Add a new category for new tshirt" className="container bg-info p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMsg()}
                    {ErrorMsg()}
                    {myCategoryForm()} 
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

