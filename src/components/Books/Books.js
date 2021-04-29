import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Checkout from '../Checkout/Checkout';


const Books = (props) => {
    const { bookName, bookPrice, imageURL, _id } = props.book;

    const history = useHistory()
    const handleCheckout = () => {
        const url = `checkout/${_id}`
        history.push(url);
    }



    return (
        <div>
            {/* <img style={{ width: '200px' }} src={imageURL} alt="" />
            <h3>{bookName}</h3>
            <p><strong>{bookPrice}$</strong>   <button onClick={handleCheckout}> Buy now</button> </p> */}

            <div style={{marginLeft:'100px', marginTop:'20px', marginBottom:'5px'}} className="col-md-4">
            <Card  style={{ width: '18rem', backgroundColor:'#FFFFFF', display:'flex',boxShadow: '5px 10px 18px #888888'  }}>
                <Card.Body>
                <img style={{ width: '200px' , height:'250px', marginLeft:'21px' }} src={imageURL} alt="" />
                    <Card.Title style={{textAlign:'center'}}> <strong>{bookName}</strong> </Card.Title>
                    <Card.Text style={{marginLeft:'8px'}}>
                        <p style={{textAlign:'center'}}> <strong>Price: {bookPrice}$</strong> </p>
                    </Card.Text>
                    <Button onClick={handleCheckout} style={{marginLeft:'80px'}} variant="success">Buy now</Button>
                </Card.Body>
            </Card>
            </div>

            



        </div>
    );
};

export default Books;