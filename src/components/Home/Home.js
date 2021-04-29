import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Books from '../Books/Books';



const Home = () => {
    const[bookDetail, setBookDetail] = useState([])
    useEffect(()=>{
        fetch('https://blueberry-pudding-00667.herokuapp.com/bookDetail')
        .then(res => res.json())
        .then(data => setBookDetail(data))
    },[])
    return (
        <div>
            {
                bookDetail.length === 0 &&  <Spinner style={{marginLeft:'650px'}} animation="border" variant="success" />
            }
            <div className="row">
            {
                bookDetail.map(book => <Books book={book}></Books>)
            }
            </div>

            
        </div>
    );
};

export default Home;