import  {  useState ,useEffect} from 'react';
import { useAuth } from '../context/AuthContext';

const NewRegistrationForm = () => {
const { apiBaseUrl } = useAuth();
  const [name,setName]=useState('');
  const [address,setAddress]=useState('');
  const [aadhar,setAadhar]=useState('');
  const [mobile, setMobile] = useState('');
  const [lambitMatra, setLambitMatra] = useState('');
  const [satyapitMatra, setSatyapitMatra] = useState('');
  const [status, setStatus] = useState('');

  const [customerData, setCustomerData] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  
  useEffect(() => {
    // Fetch customer data from your API endpoint
    fetch(`${apiBaseUrl}/allCustomer`) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setCustomerData(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const submitNewPayment =  async(event)=>{
    event.preventDefault();
    const registrationData = {
        "name":name,
        "address":address,
        "aadhar":aadhar,
         "mobile":mobile,
         "lambit_matra":lambitMatra,
         "satyapit_matra":satyapitMatra,
         "status":status,
  
      };

    
    
      try {
        const response = await fetch(`${apiBaseUrl}/registration/createRegistration`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });
    
        if (response.ok) {
          // Payment creation was successful
          setSubmissionStatus('success');
        } else {
          // Handle error scenarios
          setSubmissionStatus('error');
        }
      } catch (error) {
        console.error('Error creating payment:', error);
        setSubmissionStatus('error');
      }
  }

 
 

  return (
    <div className=" px-5" style={{backgroundColor:"#F1EFEF",}}>
    <div className="full-width-container text-dark p-3 pt-0  " style={{backgroundColor:"#B9EDDD",fontFamily:"poppins", border:"0px solid #000000",borderTop: "0px solid #000000", borderRadius: "0px 0px 15px 15px"  }}>
      <div className='   mx-auto text-center d-flex justify-content-center bg-success text-white' style={{fontFamily:"poppins", border:"0px solid #000000",width:"30%",borderTop: "0px solid #000000", borderRadius: "0px 0px 15px 15px" }}>
      <h3 >New Registration Form</h3>
      </div>
      {submissionStatus === 'success' ? (
          <div className="alert alert-success">Payment created successfully.</div>
        ) : submissionStatus === 'error' ? (
          <div className="alert alert-danger">Payment creation failed. Please try again.</div>
        ) : null}
      <form onSubmit={submitNewPayment} className="row p-2">
      <div className="mb-3 col-12 col-lg-3">
          <label  className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-12 col-lg-3">
          <label  className="form-label">
         Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-12 col-lg-3">
          <label  className="form-label">
          Aadhar
          </label>
          <input
            type="number"
            className="form-control"
            id="aadhar"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-12 col-lg-3">
          <label  className="form-label">
            Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-12 col-lg-3">
          <label  className="form-label">
          Lambit
          </label>
          <input
            type="number"
            className="form-control"
            id="lambitMatra"
            value={lambitMatra}
            onChange={(e) => setLambitMatra(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-12 col-lg-3">
          <label  className="form-label">
          Satyapit
          </label>
          <input
            type="text"
            className="form-control"
            id="satyapitMatra"
            value={satyapitMatra}
            onChange={(e) => setSatyapitMatra(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-12 col-lg-3">
          <label htmlFor="date" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <div className="mt-4 col-12 col-lg-3">
        <button type="submit" className=" shadow btn btn-lg btn-block btn-warning  " style={{width:"100%"}}>
          New Registration
        </button>
        </div>
        
      </form>
    </div>

<div className="pt-5 " >
    <table className="table table-striped " style={{fontFamily:"poppins", border:"0px solid #000000",borderTop: "0px solid #000000", borderRadius: "0px 0px 15px 15px"  }}>
        <thead >
          <tr >
            <th style={{borderRadius: "15px 0px 0px 0px" }} className=' text-white text-center bg-success' >Name</th>
            <th className='bg-success text-white text-center '>Address</th>
            <th className='bg-success text-white text-center'>Aadhar</th> 
             <th className='bg-success text-white text-center'>Mobile</th> 
             <th className='bg-success text-white text-center'>Lambit Matra</th> 
             <th className='bg-success text-white text-center'>Satyapit Matra</th> 
            <th  style={{borderRadius: "0px 15px 0px 0px"}} className='bg-success text-center text-white text-center'>Status</th>
         
          </tr>
        </thead>
        
        <tbody>
          {customerData.reverse().map(customer => (
            <tr key={customer._id}>
              <td className="text-center" style={{backgroundColor:""}}>{customer.name}</td>
              <td className="text-center"style={{backgroundColor:""}}>{customer.address}</td>
              <td className="text-center"style={{backgroundColor:""}}>{customer.aadhar}</td> 
               <td className="text-center"style={{backgroundColor:""}}>{customer.mobile}</td> 
               <td className="text-center"style={{backgroundColor:""}}>{customer.lambit_matra}</td>
               <td className="text-center"style={{backgroundColor:""}}>{customer.satyapit_matra}</td>
              <td className="text-center"style={{backgroundColor:"" ,}}>{customer.status}</td>
            
          
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default NewRegistrationForm;
