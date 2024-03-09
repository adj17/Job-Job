import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Add() {
  const [formData, setFormData] = useState({
    Companyname: '',
    role: '',
    experience:'',
    currentDate: new Date(), 
    selectedDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/add', formData);
      console.log('success')
      setFormData({
        Companyname: '',
        role: '',
        experience:'',
        currentDate: new Date(), 
        selectedDate: null,
      })

      // Handle the response as needed (e.g., show a success message).
    } catch (error) {
      console.error('Job addition failed:', error);
    }
  };

  return (
    <div className='reg'>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="registration-box">
              <h2 className='head1'>Add-Job</h2>

              <Form onSubmit={handleSubmit}>
                <label>Company name:</label>
                <input
                  type="text"
                  name="Companyname"
                  className='form-control'
                  value={formData.Companyname}
                  onChange={handleChange}
                />
                <br />

                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  className='form-control'
                  onChange={handleChange}
                  value={formData.role}
                />
                <br />
                <label>experience:</label>
                <input
                  type="text"
                  name="experience"
                  className='form-control'
                   value={formData.experience}
                  onChange={handleChange}
                />
                <br />
                <label>Current Date:</label>
                <input
                  type="text"
                  name="currentDate"
                  className='form-control'
                  value={formData.currentDate.toLocaleDateString()}
                  readOnly
                />
                <br />

                <label>Closing Date:</label>
                <DatePicker
                  selected={formData.selectedDate}
                  onChange={(date) => handleDateChange(date, 'selectedDate')}
                  className='form-control'
                  value={formData.selectedDate}
                />
                <br />

                <Button className='bot1' variant="primary" type="submit">
                  Add
                </Button><br></br>
                <Link to="/Admin">
      <Button className="bot1" variant="primary">
          Admin Dashboard
      </Button>
  </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Add;
