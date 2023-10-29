// src/App.js

import { useAuth } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NavigationBar from './components/Navbar'; // Import the Navbar component
import NewPaymentForm from './components/NewPayment'; // Make sure to correct the import paths
import NewPurchesForm from './components/NewPurches'; // Correct import paths
import NewRegistrationForm from './components/NewRegistration'; // Correct import paths
import AllCustomer from './components/AllCustomer'; // Correct import paths

const App = () => {
  const { user, login,  } = useAuth();

  return (
    <Router>
      <div>
        {user ? (
          <>
            <NavigationBar /> {/* Render the Navbar if the user is logged in */}
            <Routes>
              <Route path="/home" element={<Home />} />
             
              <Route path="/NewPaymentForm" element={<NewPaymentForm />} />
              <Route path="/NewPurchesForm" element={<NewPurchesForm />} />
              <Route path="/NewRegistrationForm" element={<NewRegistrationForm />} />
              <Route path="/AllCustomer" element={<AllCustomer />} />
             
            </Routes>
            
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login login={login}  />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
