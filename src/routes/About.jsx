import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 text-primary">Hello, I'm Johnson!</h1>
          <p className="lead text-muted">
            Aspiring developer with a strong foundation in coding and a passion
            for learning and growth.
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
    </Container>
  );
};

export default About;
