
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavFunc from "../../../components/NavFunc";
import Footer from '../../../components/Footer';


export default function MissionStatement() {
  return (
    <>
    <NavFunc/>
    <Container>
        <h1 style = {{paddingTop: "3rem", textAlign: "center"}}>Mission Statement</h1>
    <Card style={{marginTop: "3rem"}}>
      <Card.Body>
        <Card.Text style={{textAlign: "center"}}>
        Vitatech Biometrics is a team of biomedical engineers creating AI-powered infrared biometric devices for quick and easy health diagnostics.
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>


    <Footer/>
    </>
  );
}

