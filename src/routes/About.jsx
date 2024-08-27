import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 text-primary">Hello, I'm Johnson!</h1>
          <p className="lead text-muted">
            Passionate software developer with experience in web development. I
            solve problems and create impactful solutions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <h2 className="h3">Skills</h2>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <strong>Languages:</strong> JavaScript, Python
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Frameworks:</strong> React,Django, Flask
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Tools:</strong> Git
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={6} className="mb-4">
          <h2 className="h3">Approach</h2>
          <p>
            I focus on clean code and user-centered design. Believing in
            iterative development and continuous improvement to deliver
            high-quality solutions.
          </p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/johnson-omwoyo-809a20312?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxzRsjEXmSVCx3aP2NKOOiw%3D%3D"
            className="me-2"
          >
            Connect on LinkedIn
          </Button>
          <Button variant="secondary" href="https://github.com/johnson-Omwoyo">
            View GitHub Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
