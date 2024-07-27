import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavFunc from '../../../components/NavFunc';
import Footer from '../../../components/Footer';

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
<form action="https://usebasin.com/f/01bda3c3467a" method="POST" style = {{textAlign:"center", paddingLeft: "25%", paddingRight: "25%"}}>
 <div className="form-group">
    <label htmlFor="first-name" style={{marginTop:"3%"}}>First Name</label>
    <input type="text" className="form-control" id="name" name='name'/>
  </div>
  <div className="form-group">
    <label htmlFor="last-name" style={{marginTop:"3%"}}>Last Name</label>
    <input type="text" className="form-control" id="last-name" name='last-name'/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" style={{marginTop:"3%"}}>Email address</label>
    <input type="email" className="form-control" id="email" name= "email" aria-describedby="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="comments" style={{marginTop:"3%"}}>Comments</label>
    <textarea className="form-control" id="comments" name='comments' rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary" style={{marginTop:"3%"}}>Submit</button>
</form>
    </Container>
    <Footer/>
    </>
  );
}