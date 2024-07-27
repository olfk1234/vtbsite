
import NavFunc from "../../components/NavFunc";
import { Card, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className="html">
    <div className="body">
    <NavFunc/>
  <Container fluid style = {{textAlign: "center"}}>
  {/* <div style={{padding: "0"}}>
        <Vitatech/>
        <Biometrics/>
      </div> */}
<Carousel>
  <Carousel.Item>
  {/* https://www.pexels.com/photo/brown-cattle-on-green-grass-1455455/ */}
  <img className="d-block w-100" src="/cowherdsmall.jpg" alt="Image One" id="image-section" style={{ maxHeight: '650px', objectFit: 'cover' }}/> 
    <Carousel.Caption>
      <h3>Animal Thermography</h3>
      <p>See how we are using the power of AI to determine whether animals are sick.</p>
      <motion.button className="btn btn-primary" whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>Explore More</motion.button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Container>
  <Container>
  <h2 style={{textAlign: "center", marginTop: "3rem"}}> About Us</h2>
  <Card style={{marginTop: "3rem", marginBottom: "3rem"}}>
      <Card.Body>
        <Card.Text style={{textAlign: "center"}}>
        We are team of biomedical engineers creating AI-powered infrared biometric devices for quick and easy health diagnostics.
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    <div style={{backgroundColor:"#EEEEEE", paddingBottom: "2rem"}}>
    <Container style ={{textAlign:"center"}}>
    <h2 style={{paddingTop: "3rem", textAlign: "center"}}>Interested?</h2>
    <p style={{marginTop: "2rem"}}>Click on the button below to enter the email list:</p>
    <Link href="/interest"><motion.button className="btn btn-primary" whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>To Interest Form</motion.button></Link>
    </Container>
    </div>
  
 <Footer/>
  </div>
  </div>
);
}
