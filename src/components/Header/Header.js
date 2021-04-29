import { Button, Navbar, Nav,Form } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser.email)
    return (
        <div>
            <Navbar  style={{backgroundColor:'whitesmoke' ,height:'50px'}}  variant="dark">
                <Nav  className="mr-auto">
                <Navbar.Brand ><Link style={{color:'lightgreen', fontSize:'30px',marginRight:'3px' }} to="/home"><strong>Home</strong></Link></Navbar.Brand>
                    <Nav.Link ><Link style={{ color:'lightgreen', fontSize:'25px' }} to="/admin"><strong>Admin</strong></Link></Nav.Link>
                    <Nav.Link ></Nav.Link>
                    <Nav.Link><Link style={{ color:'lightgreen',  fontSize:'25px' ,marginRight:'5px' }} to="/login"><Button variant="success">Login</Button></Link></Nav.Link>
                    <Nav.Link ><Link style={{ color:'lightgreen',  fontSize:'25px',marginRight:'13px' }} to="/orders"><strong>Orders</strong></Link></Nav.Link>
                    <Nav.Link><p  style={{ color:'lightgreen',  fontSize:'23px' }}>User Email: {loggedInUser.email}</p></Nav.Link>

                </Nav>

            </Navbar>

            

        </div>
    );
};

export default Header;