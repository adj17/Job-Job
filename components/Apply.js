import React, { useState,useEffect } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
function Apply() {
  const location = useNavigate();
  // const { role, companyName } = location.state || {};

  const {id} = useParams();
  // console.log(id);

  const [formData, setFormData] = useState({  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch('/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Handle the response as needed (e.g., show a success message).
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };


  useEffect(() => { 
    // Fetch data from the server 
    const fetchData = async () => { 
      try { 
      const response1 = await fetch(`/jobdataview/${id}`); // Assuming you have a route to get all users 
        const data = await response1.json(); 
        setFormData(data); 
      } catch (error) { 
        console.error('Error fetching data:', error); 
      } 
    }; 
 
    fetchData(); 
  }, [id]); 






  return (
    <div className='reg'>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="registration-box">
              <h2 className='head1'>Application-Form</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>username</Form.Label>
                  <Form.Control type="text" name="username"placeholder="username" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email"placeholder="email"onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="position">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" value={formData.role} readOnly />
              </Form.Group>
                <h3 className='head1'>upload resume</h3>
                <input type='file' name='file' id='file' />
                <br></br>
                <Form.Group controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" value={formData.Companyname} readOnly />
              </Form.Group>
                <Button className='bot1' variant="primary" type="submit">
                  Apply
                </Button><br></br><br></br>
                <Link to="/Usersearch"><Button className='bot' variant="primary"> Search Jobs</Button></Link>
              </Form>
             
            
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Apply;
