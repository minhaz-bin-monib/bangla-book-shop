import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ManageBooks = (props) => {
    const {bookName, bookPrice, imageURL, _id} =props.book;
    // console.log(_id)

    const deleteProduct =(id) =>{
        
        fetch(`https://blueberry-pudding-00667.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
        alert('Deleted complete. Check it from home')

    }
    return (
        <div style={{marginLeft:'5px'}}>
            
            <div  style={{marginTop:'20px', border:'2px solid green', width:'400px', paddingBottom:'2px',paddingLeft:'2px', borderRadius:'3px'}}>
            <h3 >{bookName}</h3>
            <p><strong> Price: {bookPrice}$</strong></p>
            <Button variant="danger" onClick={()=>deleteProduct(_id)}>Delete</Button>
            
            <br/>
            </div>
            
        </div>
    );
};

export default ManageBooks;