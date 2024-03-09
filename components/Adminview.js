import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState,useEffect,useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button,Form,Modal } from 'react-bootstrap';
import axios from 'axios';
function View()  {
  const [jobs, setJobs] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editJobId, setEditJobId] = useState('');
  const [editedJobData, setEditedJobData] = useState({ Companyname: '', role: '', experience: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/job');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/jobdata/${id}`);
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleShowEditModal = useCallback((id) => {
    setEditJobId(id);
    setShowEditModal(true);
    const jobToEdit = jobs.find((job) => job._id === id);
    setEditedJobData({ ...jobToEdit });
  }, [jobs]);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleEditJob = async () => {
    try {
      await axios.put(`/jobdata/${editJobId}`, editedJobData);
      const updatedJobs = jobs.map((job) =>
        job._id === editJobId ? { ...job, ...editedJobData } : job
      );
      setJobs(updatedJobs);
      handleCloseEditModal();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <><div>
          <h2>Job Details</h2>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Company name</th>
                      <th>Role</th>
                      <th>Experience</th>
                      <th>Action</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {jobs.map((job, index) => (
                      <tr key={job._id}>
                          <td>{index + 1}</td>
                          <td>{job.Companyname}</td>
                          <td>{job.role}</td>
                          <td>{job.experience}</td>
                          <td>
                              <Button variant="info" onClick={() => handleShowEditModal(job._id)}>
                                  Edit
                              </Button>
                          </td>
                          <td>
                              <Button variant="danger" onClick={() => handleDelete(job._id)}>
                                  Delete
                              </Button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </Table>

          {showEditModal && (
              <Modal show={showEditModal} onHide={handleCloseEditModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit Job</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form>
                          <Form.Group controlId="editCompanyName">
                              <Form.Label>Company Name</Form.Label>
                              <Form.Control
                                  type="text"
                                  value={editedJobData.Companyname}
                                  onChange={(e) => setEditedJobData({ ...editedJobData, Companyname: e.target.value })} />
                          </Form.Group>
                          <Form.Group controlId="editRole">
                              <Form.Label>Role</Form.Label>
                              <Form.Control
                                  type="text"
                                  value={editedJobData.role}
                                  onChange={(e) => setEditedJobData({ ...editedJobData, role: e.target.value })} />
                          </Form.Group>
                          <Form.Group controlId="editExperience">
                              <Form.Label>Experience</Form.Label>
                              <Form.Control
                                  type="text"
                                  value={editedJobData.experience}
                                  onChange={(e) => setEditedJobData({ ...editedJobData, experience: e.target.value })} />
                          </Form.Group>
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseEditModal}>
                          Close
                      </Button>
                      <Button variant="primary" onClick={handleEditJob}>
                          Save Changes
                      </Button>
                  </Modal.Footer>
              </Modal>
             
          )}
      </div><div className="text-center mt-3">
              <Link to="/admin">
                  <Button className="bot1" variant="primary">
                      Admin Dashboard
                  </Button>
              </Link>
          </div></>
  
  );
}
export default View;
