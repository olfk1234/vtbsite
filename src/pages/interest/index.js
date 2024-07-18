import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavFunc from '../../../components/NavFunc';
import Footer from '../../../components/Footer';
import { motion } from "framer-motion";

export default function FormExport() {
  return (
    <>
    <NavFunc/>
    <Container style = {{paddingBottom: "7.5%"}}>
    <div style = {{paddingTop: "3rem", textAlign:"center"}}>
    <h1>Interest Form</h1>
    <p>Sign up if you want to get updates about our latest products.</p>
    </div>
    {/* <Form action = {"https://usebasin.com/f/e1aaad14429a"} method = {"POST"}style = {{textAlign:"center", paddingLeft: "25%", paddingRight: "25%"}}>
    <Form.Group className="mb-3" controlId="formBasicFN">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLN">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
<form action="https://usebasin.com/f/e1aaad14429a" method="POST" style = {{textAlign:"center", paddingLeft: "25%", paddingRight: "25%"}}>
 <div class="form-group">
    <label htmlFor="first-name" style={{marginTop:"3%"}}>First Name</label>
    <input type="text" class="form-control" id="name" name='name'/>
  </div>
  <div class="form-group">
    <label htmlFor="last-name" style={{marginTop:"3%"}}>Last Name</label>
    <input type="text" class="form-control" id="last-name" name='last-name'/>
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1" style={{marginTop:"3%"}}>Email address</label>
    <input type="email" class="form-control" id="email" name= "email" aria-describedby="email"/>
  </div>
  <div class="form-group">
    <label htmlFor="comments" style={{marginTop:"3%"}}>Comments</label>
    <textarea class="form-control" name="comments" rows="3"></textarea>
  </div>
  <motion.button type="submit" class="btn btn-primary" style={{marginTop:"3%"}} whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>Submit</motion.button>
</form>
    </Container>
    <Footer/>
    </>
  );
}