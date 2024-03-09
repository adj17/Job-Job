import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
function Applied()  {
 const { id: userId } = useParams();
  const [applicants, setApplicants] = useState([]);
  console.log(applicants)


    useEffect(() => {
    const fetchData = async () => {
      try {
     
        const response = await axios.get(`/showhires/${userId}`);
        setApplicants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/applydata/${id}`);
      setApplicants((prevApply) => prevApply.filter((applicants) => applicants._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <><div>
          <h2>Job applied</h2>
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
                          
                           <td>
                              <Button variant="danger" onClick={() => handleDelete(applicants._id)}>
                                  Cancel
                              </Button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </Table>

        
      </div><div className="text-center mt-3">
              <Link to="/Userpage">
                  <Button className="bot1" variant="primary">
                      User Dashboard
                  </Button>
              </Link>
          </div></>
  
  );
}
export default Applied;
