import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
 import Nav from "react-bootstrap/Nav";
const NavigationBar = () => {
  const { logout } = useAuth();

  return (
    <Navbar className="bg-success px-3 text-white" style={{ top: "0", left: "0", width: "100%" }} expand="lg">

       
        <Navbar.Brand exact to="/home"  className="w-100 text-white " style={{fontFamily:"poppins" ,fontSize:"20px"}} >
      Radha Krishna Industries Pvt. Ltd.
        </Navbar.Brand>
         
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ml-auto'>
            
              <NavLink to="/NewRegistrationForm" className="nav-link text-white" activeClassName="active">
                Registration
              </NavLink>
            
            
              <NavLink to="/NewPurchesForm" className="nav-link text-white" activeClassName="active">
                Purches
              </NavLink>
            
            
              <NavLink to="/NewPaymentForm" className="nav-link text-white" activeClassName="active">
                Payment
              </NavLink>
            
            
              <NavLink to="/AllCustomer" className="nav-link text-white" activeClassName="active">
                Customers
              </NavLink>
           
            <NavLink>
              <button
                className="bg-danger text-white border-0 rounded-100 pb-1 mt-1 mx-2"
                onClick={logout}
                style={{ borderRadius: '5px' }}
              >
                Logout
              </button>
              </NavLink>
            {/* Add more navigation items as needed */}
            </Nav>
          </Navbar.Collapse>
     
    </Navbar>
  );
};

export default NavigationBar;
