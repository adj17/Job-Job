import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button ,Form,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Basic() {
  return (
    <><div className='jav'>
          <Navbar className="nav  ">
              <Container className='con'><Image className='img' src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"></Image> <Nav.Link href="#home"></Nav.Link>
                  <Navbar.Brand href="#home"><h1 className='head1'>JOB & JOB</h1></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Form className="d-flex">
                          <Form.Control
                              type="search"
                              placeholder="Search Jobs,Companies"
                              className="me-2"
                              aria-label="Search" /><Button className='bot' variant="primary">
<i class="fa-brands fa-searchengin"></i></Button>
                      </Form><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>
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
                          </NavDropdown><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>
                          <NavDropdown title="Categories" id="Categories">
                              <NavDropdown.Item href="#action/3.1">IT</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">  Cyber  security  </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Finance</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Marketing</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Health services</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Ecnomical development</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">engineering</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.1">Business analystic</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.1">Communication department</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.1"> Bussiness Communication </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.1">analystic department</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.1"> Bussiness administration </NavDropdown.Item>
                          </NavDropdown><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>

                          <Link to="/Register"> <Button className='bot' variant="primary"> Register</Button> </Link><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>
                          <Link to="/Signin">  <Button className='bot' variant="primary">Sign-In</Button></Link><Nav.Link href="#home"></Nav.Link>
                      </Nav>

                  </Navbar.Collapse>
                  <button class="button1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
    </svg>
    Unlock Pro
</button>
              </Container>
          </Navbar><br></br>
          <Image className='hop' src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=2000"></Image>
      </div><div className='container'></div><div>
              <h1 className='head3'>Featured   companies actively hiring</h1><div className='card1'>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://images-platform.99static.com//kg8OcHbYSv7AJbOqTSS1fBc_A5g=/315x258:815x758/fit-in/500x500/99designs-contests-attachments/67/67712/attachment_67712602" />
                      <Card.Body>
                          <Card.Title>NET DEV  </Card.Title>
                          <Card.Text>
                              <h5>Trusted global solutions company</h5>
                              <h6>  Job vaccancy: junior web developer</h6> <br></br>

                          </Card.Text>
             
                        <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://images-platform.99static.com//-q05jxeZ7qO6rfG3fryx5ESTOgg=/118x119:1479x1480/fit-in/500x500/99designs-contests-attachments/103/103768/attachment_103768679" />
                      <Card.Body>
                          <Card.Title>AVERTIUM  </Card.Title>
                          <Card.Text>
                              <h5>Leader in digital  engineering</h5>
                              <h6>  Job vaccancy: junior software engineer</h6> <br></br>

                          </Card.Text> <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
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
                          <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
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
                          <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
                      </Card.Body>
                  </Card>



              </div>
              {/* card2 */}





              <h1 className='head2'>Top companies hiring now</h1>
              <div className='card2'>
              <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png" />
                      <Card.Body>
                          <Card.Title>MICROSOFT </Card.Title>
                          <Card.Text>
                              <h5>Trusted global solutions company</h5>
                              <h6>  Job vaccancy: junior web developer</h6> <br></br>

                          </Card.Text>
                          <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
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
                          <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
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
                          <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
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
                          <Link to="/Signin"> 
                          <Button className='bot' variant="primary">Apply Now</Button></Link>
                      </Card.Body>
                  </Card>
              </div>
          </div>
          <footer className='foot'>
         <div class="footer-row-2">
          <div class="column-1">
            <br></br>
            Investor Relations       |
            Privacy|
            Job Test

          </div><br></br>
          <div class="column-2">
            home|
           
            Cookie Preferences|
            Legal Notices
          </div><br></br>
          <div class="column-3">
            <p>Account  |
          Ways to Apply|
            Corporate Information</p>
         
          </div><br></br>
          <div class="column-4">
            Media Centre  |<></>
            Terms of Use|
            Contact Us|
          </div>
        </div>
        <div class="footer-row-3">
        <p>&copy; 2023 Your Company</p>
        Privacy Policy| Terms of Service
        <p>Contact us at contact@job&job.com</p>
        </div><br></br>
        <div class="footer-row-4">
          <p>Copyright ©2022 All rights reserved Made with  by Job & Job company.</p>
        </div>
        
      </footer></>
   
  );
}

export default Basic;
