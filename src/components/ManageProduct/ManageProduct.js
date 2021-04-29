import React, { useEffect, useState } from 'react';
import ManageBooks from '../ManageBooks/ManageBooks';

const ManageProduct = () => {
    const[bookDetail, setBookDetail] = useState([])
    useEffect(()=>{
        fetch('https://blueberry-pudding-00667.herokuapp.com/bookDetail')
        .then(res => res.json())
        .then(data => setBookDetail(data))
    },[])
    return (
        <div>
            <h1 style={{color:'yellowgreen'}}>Manage Your Products From here: </h1>
            <div>
            {
                bookDetail.map(book => <ManageBooks book={book}></ManageBooks>)
            }
            </div>
            
            
        </div>
    );
};

export default ManageProduct;