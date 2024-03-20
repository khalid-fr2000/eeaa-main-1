import { Link,NavLink } from "react-router-dom";

import React from 'react';

const Head = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <Link to='/'>
        <h1>Courses 4 Arab 2024</h1>
        </Link>
      <ul className="flex">
        <li className="main-list">
          <NavLink className="main-link" to="/html">
            {" "}
            HTML{" "}
          </NavLink>
          <ul className="sub-ul">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">Crash Course</a>
            </li>
            <li>
              <a href="">learn in 1h</a>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <NavLink className="main-link" to="/Css">
            {" "}
            CSS{" "}
          </NavLink>
          <ul className="sub-ul">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">CSS Examples</a>
            </li>
            <li className="mini-projects">
              <a href="">mini projects&nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="">project 1</a>
                </li>
                <li>
                  <a href="">project 2</a>
                </li>
                <li>
                  <a href="">project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <NavLink className="main-link" to="/Javascript">
            {" "}
            JavaScript{" "}
          </NavLink>
          <ul className="sub-ul sub-of-js">
            <li>
              <a href="">coming soon🔥</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
    </div>
  );
}

export default Head;

