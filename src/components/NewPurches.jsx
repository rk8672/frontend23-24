import  { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
const NewPurchesForm = () => {
  const { apiBaseUrl } = useAuth();
  const [customerOption, setCustomerOption] = useState([]);
  const [customer, setCustomer] = useState(''); // State for selected customer
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brandName, setBrandName] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  useEffect(() => {
    fetch(`${apiBaseUrl}/allCustomer`)
      .then(response => response.json())
      .then(data => setCustomerOption(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const submitNewPayment =  async(event)=>{
    event.preventDefault(); // Prevent the default form submission behavior
    const paymentData = {
        customerId:customer,
        amount: amount,
        purchaseDate: date,
        quantity: 100,
        brandName: brandName,
        "name": "Bhusi",
  
      };
    
      try {
        const response = await fetch(`${apiBaseUrl}/products/createPurches`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
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
    <div className="d-flex justify-content-center m-5">
    <div className="container text-dark p-3 m-2  bg-light" style={{border:"1px solid #000000",borderRadius:"10px"}}>
      <h2>New Purches</h2>
      {submissionStatus === 'success' ? (
          <div className="alert alert-success">Payment created successfully.</div>
        ) : submissionStatus === 'error' ? (
          <div className="alert alert-danger">Payment creation failed. Please try again.</div>
        ) : null}
      <form onSubmit={submitNewPayment}>
        <div className="mb-3">
          <label htmlFor="customer" className="form-label">
            Select Customer
          </label>
          <select
            className="form-select"
            id="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          >
          
            <option value="">Select a customer</option>
            {customerOption.map((customer) => (
              <option key={customer._id} value={customer._id} className='bg-white'>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
          Quantity in QTL
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
          Brand Name
          </label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Payment Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-lg btn-block btn-warning w-100">
         Create Purches
        </button>
      </form>
    </div>
     </div>
  );
};

export default NewPurchesForm;
