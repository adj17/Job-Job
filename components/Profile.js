import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    // Load user details from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
    setEditedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      // Send a PUT request to update user details in the MongoDB collection
      const response = await axios.put(`/profile/users/${user._id}`, editedUser);

      if (response.data) {
        // Update the user state with the edited details
        setUser(response.data);
        setEditMode(false);
      } else {
        console.error('Failed to update user details');
      }
    } catch (error) {
      console.error('Failed to update user details', error);
    }
  };

  const handleDelete = async (userId) => {
    try {

      await axios.delete(`/api/users/${userId}`);
  
   
      localStorage.removeItem('user');
      setUser(null);
      window.location.href = '/register';
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };
  return (
    <div className='profile'>
      <div className='mode'>
        <h1 className='head5'>User Profile</h1>
       
        {editMode ? (
          <Form>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type='text'
                name='username'
                value={editedUser.username || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={editedUser.email || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role:</Form.Label>
              <Form.Control
                type='text'
                name='designation'
                value={editedUser.designation || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant='primary' onClick={handleSaveClick}>
              Save
            </Button>
          </Form>
        ) : user ? (
          <div className='head6'>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.designation}</p>
          </div>
        ) : (
          <p>No user details found .</p>
        )}
        {!editMode && (
          <Button className='bot1' variant='primary' onClick={handleEditClick}>
            Edit
          </Button>
        )}<br></br><br></br>
      <Button variant="outline-danger" onClick={() => handleDelete(user._id)}>
  Delete account
</Button><br></br>

        <Link to='/Userpage'>
          <Button className='bot1' variant='primary'>
            User Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
