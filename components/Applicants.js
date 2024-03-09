import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
function Applicant()  {
  const [applicants, setapplicants] = useState([]);
  console.log(applicants)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/showhire');
        setapplicants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <><div>
          <h2>Applicant Details</h2>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Username</th>
                      <th>email</th>
                      <th>designation</th>
                      <th>company applied</th>
               
                  </tr>
              </thead>
              <tbody>
                  {applicants.map((applicants, index) => (
                      <tr key={applicants._id}>
                          <td>{index + 1}</td>
                          <td>{applicants.username}</td>
                          <td>{applicants.email}</td>
                          <td>{applicants.role}</td>
                          <td>{applicants.Companyname}</td>
                          
                         
                      </tr>
                  ))}
              </tbody>
          </Table>

        
      </div><div className="text-center mt-3">
              <Link to="/admin">
                  <Button className="bot1" variant="primary">
                      Admin Dashboard
                  </Button>
              </Link>
          </div></>
  
  );
}
export default Applicant;
