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
      <Card.Img variant="top" src="/Andy-7.jpg" />
      <Card.Body>
        <Card.Title>Anando Paul - <i>President</i></Card.Title>
        <Card.Text>
        Anando Paul graduated from Texas A&M’s School of Engineering with a bachelor of science in biomedical engineering while studying pre-medicine. With skills in interpersonal communication and collaborative project development from his years of experience designing wearable electronic devices in Texas A&M’s Embedded Signal Processing Laboratory, Anando excels in the leadership qualities and technical expertise necessary to spearhead medical innovation.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col style = {{paddingTop: "3rem"}} xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src="/ganesh_png.jpeg" />
      <Card.Body>
        <Card.Title>Ganesh Jagannath - <i>VP of Product Development</i></Card.Title>
        <Card.Text>
        Ganesh Jagannath graduated from Texas A&M's School of Engineering with a Bachelors of Science in Biomedical Engineering and a minor in Business. With skills in multiple programming languages and technologies, Ganesh now works as a Software Engineer. Using his technical skills, Ganesh plans to help to bring about medical innovation.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col style = {{paddingTop: "3rem"}} xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Shaunak Dabir - <i>VP of Operations</i></Card.Title>
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
