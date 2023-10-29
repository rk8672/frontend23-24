import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the AuthContext
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login ,apiBaseUrl } = useAuth(); // Get the login function from AuthContext

  const handleLogin = async () => {
   
    try {
      const response = await axios.post(`${apiBaseUrl}/login/login`, {
        username,
        password,
      });

      // const token = response.data.token;
      const token = response.data.token;
      // Call the login function with the token to set the user as authenticated
      login({ token });

      // Redirect to the desired route (e.g., '/home').
      navigate('/AllCustomer');
    } catch (error) {
      // Handle login error (e.g., display an error message).
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 bg-success w-50">
        <div className="card-body" >
          <h2 className="card-title text-white" >Login</h2>
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-warning  w-100" onClick={handleLogin}>
            Login
          </button>

          
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
