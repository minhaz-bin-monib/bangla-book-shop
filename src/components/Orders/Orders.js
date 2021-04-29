import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    

    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('https://blueberry-pudding-00667.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders)
    
    return (
        <div style={{marginLeft:'10px'}}>
            <h1 style={{color:'green',marginTop:'5px'}}>All Ordered Products: </h1>
            {/* <div style={{ width:'500px',marginTop:'30px',paddingLeft:'5px', borderRadius:'10px'}}> */}
            {
                orders.map(order => <p><h4 style={{color:'yellowgreen',marginBottom:'3px'}}>{order.bookName}</h4> {order.bookPrice} <br/> Customer Email: {order.userEmail} <br/>Order Date: {order.orderTime} </p>  )
            }
            {/* </div> */}
        </div>
    );
};

export default Orders;