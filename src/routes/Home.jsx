import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead">
            Hi, I'm Johnson Omwoyo. I created this portfolio to showcase my
            growing skills and dedication to improving as a developer.
          </p>
          <a href="#featured-work" className="btn btn-primary btn-lg">
            See My Work
          </a>
        </div>
      </section>

      <section className="about-section text-center py-5">
        <div className="container">
          <h2 className="display-4">About Me</h2>
          <p className="lead2">
            I am a passionate developer specializing in web development.
          </p>
          <NavLink to="/about" className="btn btn-outline-primary">
            Learn More
          </NavLink>
        </div>
      </section>

      <section
        id="featured-work"
        className="featured-work-section text-center py-5 bg-light"
      >
        <div className="container">
          <h2 className="display-4">Featured Work</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661768289109-c814be8d7c3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top"
                  alt="Project 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Ticket Booking</h5>
                  <p className="card-text">
                    A project built with react js applying many of the features
                    on a ticket booking site
                  </p>
                  <a href="https://flight-booking-com.vercel.app/">view</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://www.gardendesign.com/pictures/images/900x705Max/site_3/japanese-maple-tree-acer-palmatum-dreamstime_12239.jpg"
                  className="card-img-top"
                  alt="Project 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Neighbourhood Nurseries</h5>
                  <p className="card-text">
                    This is a project built with Vanilla Js it allows the user
                    to add and purchase from other sellers{" "}
                  </p>
                  <a href="https://neighbourhood-nurseries.vercel.app/">view</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683309567322-e95b9f182dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top"
                  alt="Project 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Portfolio</h5>
                  <p className="card-text">
                    The currently viewed portfolio built with react js and
                    bootstrap(IV) making good utilization of there respective
                    features like routing and screen responsiveness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
