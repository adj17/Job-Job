import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button ,Form,Image,Card,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Usersearch() 
{const [job, setUsers] = useState([]); 
    const [searchInput, setSearchInput] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    useEffect(() => { 
      // Fetch data from the server 
      const fetchData = async () => { 
        try { 
          const response = await fetch('/job'); // Assuming you have a route to get all users 
          const data = await response.json(); 
          setUsers(data); 
        } catch (error) { 
          console.error('Error fetching data:', error); 
        } 
      }; 
   
      fetchData(); 
    }, []); 
    useEffect(() => {
        const filteredData = job.filter((job) => {
          const companyNameMatch = job.Companyname.toLowerCase().includes(searchInput.toLowerCase());
          const roleMatch = job.role.toLowerCase().includes(searchInput.toLowerCase());
          const currentDate = new Date();
          const closingDate = job.selectedDate ? new Date(job.selectedDate) : null;
          return (companyNameMatch || roleMatch) && (!closingDate || currentDate < closingDate);
        });
      
        setFilteredJobs(filteredData);
      }, [searchInput, job]);
  return (
  
  <><div className='dash'>
          <Navbar expand="lg" className="bg-body-tertiary">

              <Container className='con'><Image className='img' src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"></Image>
                  <Navbar.Brand href="#home"><h1 className='head1'>User-search</h1></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto ">
                      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search Jobs, Companies"
          className="me-2"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='bot' variant="primary">
          <i className="fa-brands fa-searchengin"></i>
        </Button>
      </Form> <Nav.Link href="#link"></Nav.Link>
                          <Nav.Link href="#link"></Nav.Link>
                          <Nav className="me-2">
                          <NavDropdown title="Jobs" id="Job">
                              <NavDropdown.Item href="#action/3.1">software engineer</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">  web developer   </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">data analyst</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.4">designer</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.5">Consultant</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.6">HR manager</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.6">Base imaging developer</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.6">Java backend developer</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.6">Quick base developer</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.6">Database administrator</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.6">Database specialist</NavDropdown.Item>
                          </NavDropdown><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link></Nav>
                          <Nav.Link href="#link"></Nav.Link>
                          <Nav.Link href="#link"></Nav.Link>
                          <Link to="/Userpage" >       <button class="Btn">

                              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                              <div class="text">Userdash</div>
                          </button></Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

      </div>
      <div className='joj'>
  <div>
    <h2 className='head2'>Jobs Available</h2>
    <div className="job-container">
      {filteredJobs.map((job) => (
        <div className="job-card" key={job._id}>
          <Card>
            <Card.Body>
              <Card.Title>{job.Companyname}</Card.Title>
              <Card.Text>
                <strong>Role: {job.role}</strong> <br></br>  <br></br>  
                <p><strong>Added on:</strong> {new Date(job.currentDate).toLocaleDateString()}</p>
          {job.selectedDate && (
         <p><strong>Closing Date:</strong> {new Date(job.selectedDate).toLocaleDateString()}</p>
          )}
              </Card.Text>
              <Link to= {`/Apply/${job._id}`}>
             
  <Button className='bot' variant="primary">Apply now</Button>
</Link>

            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </div>
</div>

      
      
      
      
      
      
      
      
      
      
      <div className='container'></div><div>
              <h1 className='head3'>Featured companies actively hiring</h1><div className='card1'>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://images-platform.99static.com//kg8OcHbYSv7AJbOqTSS1fBc_A5g=/315x258:815x758/fit-in/500x500/99designs-contests-attachments/67/67712/attachment_67712602" />
                      <Card.Body>
                          <Card.Title>NET DEV  </Card.Title>
                          <Card.Text>
                              <h5>Trusted global solutions company</h5>
                              <h6>  Job vaccancy: junior web developer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://images-platform.99static.com//-q05jxeZ7qO6rfG3fryx5ESTOgg=/118x119:1479x1480/fit-in/500x500/99designs-contests-attachments/103/103768/attachment_103768679" />
                      <Card.Body>
                          <Card.Title>AVERTIUM  </Card.Title>
                          <Card.Text>
                              <h5>Leader in digital  engineering</h5>
                              <h6>  Job vaccancy: junior software engineer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>




                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://images-platform.99static.com//7LL7gDmXh3mvp0yXeoRYOQy2CyA=/50x49:946x945/fit-in/500x500/99designs-contests-attachments/111/111221/attachment_111221147" />
                      <Card.Body>
                          <Card.Title>CREATIVE SWATCH  </Card.Title>
                          <Card.Text>
                              <h5>Leading ITeS company with global presence</h5>
                              <h6>  Job vaccancy: marketing officer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>




                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHo64L8kdVik_XM4xcB3juC3Pkt-kQFrtCE_sOI-okBhYp5HDLDo6dB_Ouxc989R_0-o&usqp=CAU" />
                      <Card.Body>
                          <Card.Title>DXC Technology Company.</Card.Title>
                          <Card.Text>
                              <h5>Technology services & consulting company.</h5>
                              <h6>  Job vaccancy: Data analyst</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>



              </div>
              {/* card2 */}





             
              <div className='card2'>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png" />
                      <Card.Body>
                          <Card.Title>MICROSOFT </Card.Title>
                          <Card.Text>
                              <h5>Trusted global solutions company</h5>
                              <h6>  Job vaccancy: junior web developer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://images-platform.99static.com//Is4QxvjUiXKuRAETBR1bVi95tgk=/280x0:1226x946/fit-in/590x590/99designs-contests-attachments/49/49843/attachment_49843328" />
                      <Card.Body>
                          <Card.Title>LIFT TECH  </Card.Title>
                          <Card.Text>
                              <h5>Leader in digital  engineering</h5>
                              <h6>  Job vaccancy: junior software engineer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>




                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/024/806/442/original/infosys-logo-transparent-free-png.png" />
                      <Card.Body>
                          <Card.Title>INFOSYS  </Card.Title>
                          <Card.Text>
                              <h5>Leading ITeS company with global presence</h5>
                              <h6>  Job vaccancy: markemting officer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>




                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://i.pinimg.com/564x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" />
                      <Card.Body>
                          <Card.Title>GOOGLE.</Card.Title>
                          <Card.Text>
                              <h5>Technology services & consulting company.</h5>
                              <h6>  Job vaccancy: Data analyst</h6> <br></br>

                          </Card.Text>
                          <Link to="/Apply"> <Button className='bot' variant="primary"> Apply now</Button></Link>
                      </Card.Body>
                  </Card>
              </div>
          </div></>
    
  
  );
}








export default Usersearch;