import React from 'react';
import Menu from './Menu';


export default function Base({
    title="My Title",
    description="Welcome to the T-shirt Shop",
    className="bg-dark text-white p-4",
    children})
    {
    return(
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title} </h2>
                    <p className="lead"> {description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>

            <footer>
                <div className="container-fluid bg-success text-white text-center py-1">
                    <h5> If you got any questions, feel free to reach out <span> </span>
                    <button className="btn btn-warning btn-sm rounded-lg">contact us</button></h5>
                </div>
            </footer>
        </div>
    )
}
