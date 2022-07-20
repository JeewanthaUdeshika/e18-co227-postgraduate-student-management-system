import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li classNames="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>

            <li classNames="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Registration
              </a>
            </li>

            <li classNames="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                News
              </a>
            </li>

            <li classNames="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>

          <p className="text-center texct-muted">
            &copy; University of Peradeniya
          </p>

          <div className="b-example-divider"></div>
        </footer>
      </div>
    );
  }
}

export default Footer;
