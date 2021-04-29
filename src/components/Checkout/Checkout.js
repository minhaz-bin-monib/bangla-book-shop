import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    
    const {id} = useParams();
    
    
    const[bookDetail, setBookDetail] = useState([])
    console.log(bookDetail)
    useEffect(()=>{
        fetch('https://blueberry-pudding-00667.herokuapp.com/bookDetail')
        .then(res => res.json())
        .then(data => setBookDetail(data))
    },[])

    
    
    
    
    const onSubmit = data =>{
        alert('Your Product Added Successfully')
        const time = new Date().toDateString('dd/MM/yyyy')
        
       const eventData = {
            bookName: data.bookName,
            userEmail : loggedInUser.email,
            orderTime : time,
            bookPrice: data.bookPrice
        }
        const url =`https://blueberry-pudding-00667.herokuapp.com/addOrders`;
        
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(eventData)
        })

        .then(res => console.log('server side response', res))
    }


        
    return (
        <div>
           <div style={{ border:'2px solid green', width:'520px', marginLeft:'10px', marginTop:'10px',borderRadius:'4px', paddingLeft:'5px', paddingBottom:'2px'}}>
           <h3>Product details: </h3>
            {
                bookDetail.map(book => id==book._id &&
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <input style={{border:'none',width:'500px'}} name="bookName" placeholder="Book Name" defaultValue={'Product Name: '+book.bookName} ref={register} />
                    <br/>
                    <input style={{border:'none'}} name="bookPrice" placeholder="Book Price" defaultValue={'Product Price: '+book.bookPrice+'$'} ref={register} />
                    
                    <br/>
                    <div >
                    <h6 style={{marginTop:'50px'}}>Confirm Checkout: </h6><input style={{backgroundColor:'green',borderRadius:'5px', color:'white'}} type="submit" />
                    </div>
                    
                    
                    </form>
                
                )
            } 
           </div>
            
        </div>
    );
};

export default Checkout;