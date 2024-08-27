import "./Contacts.css"; // For any additional custom styling if needed

const Contacts = () => {
  return (
    <div className="contact-page">
      {/* Contact Section */}
      <section className="contact-section text-center py-5">
        <div className="container">
          <h1 className="display-4">Contact Me</h1>
          <p className="lead">
            I’d love to hear from you. Please fill out the form below or reach
            out via other contact methods.
          </p>

          {/* Contact Form */}
          <form className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          {/* Additional Contact Information */}
          <div className="contact-info mt-5">
            <h3 className="display-5">Other Ways to Reach Me</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:your-email@example.com">
                  johnsonomwoyo100@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone: +254 708258617
              </li>
              <li>
                <i class="fa-brands fa-linkedin"></i> LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/johnson-omwoyo-809a20312?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxzRsjEXmSVCx3aP2NKOOiw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  johnson-omwoyo
                </a>
              </li>
              <li>
                <i class="fa-brands fa-square-github"></i>GitHub:{" "}
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
        </div>
      </section>
    </div>
  );
};

export default Contacts;
