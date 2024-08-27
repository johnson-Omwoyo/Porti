import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-section text-center py-5">
        <Container>
          <h1 className="display-4">Contact Me</h1>
          <p className="lead">
            I’d love to hear from you. Please fill out the form below or reach
            out via other contact methods.
          </p>

          <Form
            className="contact-form mx-auto"
            style={{ maxWidth: "600px" }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </Form>

          {status && <p className="mt-3">{status}</p>}

          <div className="contact-info mt-5">
            <h3 className="display-5">Other Ways to Reach Me</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:johnsonomwoyo100@gmail.com">
                  johnsonomwoyo100@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone: +254708258617
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i> LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/johnson-omwoyo-809a20312?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxzRsjEXmSVCx3aP2NKOOiw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  johnson-omwoyo
                </a>
              </li>
              <li>
                <i className="fa-brands fa-square-github"></i> GitHub:{" "}
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  johnson-omwoyo
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contacts;
