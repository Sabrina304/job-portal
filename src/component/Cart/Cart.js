import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{cart}=props;
    let total=0;
    for(const jobpost of cart ){
        total=total+jobpost.form_cost;
    }
    let postname='';
    for(const jobpost of cart){
        postname=postname+jobpost.post_name+' ';
        
    }
    return (
        <div className="job-summary">
            <div>
            <h2>Application Summary</h2>
                <h4>Job booked: {props.cart.length}</h4>
               <h5>Total Application form cost :${total}</h5>
               <div className="postname">
                   <h5>Total post clicked : {postname}</h5>
                   </div>
                   </div>
        </div>
    );
};

export default Cart;