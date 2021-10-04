import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Detail from '../Detail/Detail';
import './Job.css';

const Job = () => {
    
    const[job , setjobs]=useState([]);
    const [cart,setcart]=useState([]);

    useEffect( ()=>{
        fetch('./jobdata.JSON')
        .then(res=>res.json())
        .then(data=>setjobs(data))
    },[])

    const handleAddToCart=(jobpost)=>{
        const newCart=[...cart,jobpost];
        setcart(newCart);
        
    }
    return (
        <div className="dreamjob-container">
            <div className="job-container">
                
                {
                    job.map(jobpost=><Detail 
                        key={jobpost.key}
                        jobpost={jobpost}
                    handleAddToCart={handleAddToCart}></Detail>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>


            </div>
            
        </div>
    );
};

export default Job;