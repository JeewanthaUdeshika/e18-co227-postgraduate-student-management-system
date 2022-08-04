/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */

import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/procedure" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="/register" className="nav-link px-2 text-muted">
              Registration
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              News
            </a>
          </li>

          <li className="nav-item">
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
};

export default Footer;
