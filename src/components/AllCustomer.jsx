import  { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
function AllCustomer() {
  const [customerData, setCustomerData] = useState([]);
  const { apiBaseUrl } = useAuth();
  useEffect(() => {
    // Fetch customer data from your API endpoint
    fetch(`${apiBaseUrl}/allCustomer`) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setCustomerData(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App m-3 ">
      <div className='row d-flex justify-content-center'>
 
      </div>
      <h1>Customer Data</h1>
      <table className="table table-bordered " style={{border:"1px solid #000000"}}>
        <thead >
          <tr >
            <th className='bg-success text-white text-center' >Name</th>
            <th className='bg-success text-white text-center'>Address</th>
            {/* <th className='bg-success text-white'>Aadhar</th> */}
            {/* <th className='bg-success text-white'>Mobile</th> */}
            {/* <th className='bg-success text-white'>Lambit Matra</th> */}
            {/* <th className='bg-success text-white'>Satyapit Matra</th> */}
            <th className='bg-success text-white text-center'>Status</th>
            <th className='bg-success text-white text-center' >Payments</th>
            <th className='bg-success text-white text-center'>Purchase</th>
          </tr>
        </thead>
        
        <tbody>
          {customerData.reverse().map(customer => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              {/* <td>{customer.aadhar}</td> */}
              {/* <td>{customer.mobile}</td> */}
              {/* <td>{customer.lambit_matra}</td> */}
              {/* <td>{customer.satyapit_matra}</td> */}
              <td>{customer.status}</td>
              <td>
                <ul>
                  {customer.payments.map(payment => (
                    <li key={payment._id}>
                      ₹ {payment.amount}, Date: {payment.date}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
              <table className="table table-bordered border-success ">
             
              <tbody>
               
                {customer.products.map(product => (
                    <tr key={product._id}>
                     {/* <td>{product.name}</td>  */}
                     <td>{product.purchaseDate}</td> 
                     <td> {product.quantity} QTL.</td> 
                     <td>   {product.brandName}</td> 
                     <td> ₹ {product.amount}</td> 
                    </tr>
                  ))}
                
              </tbody>
            </table>
                {/* <ul>
                  {customer.products.map(product => (
                    <li key={product._id}>
                      Name: {product.name}, Purchase Date: {product.purchaseDate}, Quantity: {product.quantity}, Brand: {product.brandName}, Amount: {product.amount}
                    </li>
                  ))}
                </ul> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllCustomer;
