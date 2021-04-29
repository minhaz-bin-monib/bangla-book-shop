import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div style={{textAlign:'center', color:'yellowgreen'}}>
            <h1>Admin Controls: </h1>
            <Button style={{marginBottom:'10px'}}  variant="success"><Link to="/addProduct"><span style={{color:'white'}}>Add Product</span></Link></Button>
            <br/>
            <Button variant="success"><Link to="/manageProduct"><span style={{color:'white'}}>Manage Product</span></Link></Button>
            </div>

            
        
            
        </div>
    );
};

export default Admin;