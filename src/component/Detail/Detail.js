import React from 'react';
import './Detail.css';

const Detail = (props) => {

    const{img,post_name,salary,form_cost,gender,location}=props.jobpost;
    return (
        <div className="detail">
        <div className="row">

        <div className="column">
    <div className="card">
    <img className="circle" src={img} alt="" />
    <h3>Post: {post_name}</h3>
        <h3>Salary:{salary}</h3>
        <h3>Cost of Application Form :{form_cost}$</h3>
        <h3>Gender:{gender}</h3>
        <h3>Location:{location}</h3>
        <button 
        onClick={()=>props.handleAddToCart(props.jobpost)}
        className="add-cart"
        >add to cart</button>
    </div>
  </div>
        
        </div>
       

        </div>
    );
};

export default Detail;