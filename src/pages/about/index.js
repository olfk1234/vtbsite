import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavFunc from "../../../components/NavFunc";
import Footer from '../../../components/Footer';


export default function Home() {
  return (
    <>
    <NavFunc/>
    <Container style = {{paddingBottom: "2rem"}}>
        <h1 style = {{paddingTop: "3rem", textAlign: "center"}}>Meet The Team</h1>
    <Row>
    <Col style = {{paddingTop: "3rem"}} xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Anando Paul</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col style = {{paddingTop: "3rem"}} xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Ganesh Jagannath</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col style = {{paddingTop: "3rem"}} xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Shaunak Dabir</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    <Footer/>
    </>
  );
}
