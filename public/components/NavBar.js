import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Button,
  ListGroup,
  ListGroupItem,
  CardBody,
  Card
} from "reactstrap";

export default function NavBar() {
  const location = useLocation();
  const { pathname, search } = location;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="navBar">
        <div>
          <img src="/images/bs.jpg" alt="Bashar" />
        </div>

        <Link to="/" className={pathname === "/" ? "active" : ""}>
          <i className="fa fa-home"></i>
          <p>HOME</p>
        </Link>
        <Link to="/Skills" className={pathname === "/Skills" ? "active" : ""}>
          <i className="fas fa-laptop-code"></i>
          <p>Skills</p>
        </Link>
        <Link
          to="/Education"
          className={pathname === "/Education" ? "active" : ""}>
          <i className="fas fa-graduation-cap"></i>
          <p>EDUCATION</p>
        </Link>
        <Link
          to="/Experience"
          className={pathname === "/Experience" ? "active" : ""}>
          <i className="fa fa-eye "></i>
          <p>EXPERIENCE</p>
        </Link>
        <Link to="/Contact" className={pathname === "/Contact" ? "active" : ""}>
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </Link>
      </div>
      <div className="navBar_small bg-dark">
        <React.StrictMode>
          <Button onClick={toggle}>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Collapse isOpen={isOpen} className="collapse-element">
            <Card className="bg-dark list-container">
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="bg-dark g-item">
                    <Link to="/" className={pathname === "/" ? "active" : ""}>
                      <p>HOME</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-dark g-item">
                    <Link
                      to="/Skills"
                      className={pathname === "/Skills" ? "active" : ""}>
                      <p>SKILLS</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-dark g-item">
                    <Link
                      to="/Education"
                      className={pathname === "/Education" ? "active" : ""}>
                      <p>EDUCATION</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-dark g-item">
                    <Link
                      to="/Experience"
                      className={pathname === "/Experience" ? "active" : ""}>
                      <p>EXPERIENCE</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-dark g-item">
                    <Link
                      to="/Contact"
                      className={pathname === "/Contact" ? "active" : ""}>
                      <p>CONTACT</p>
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Collapse>
        </React.StrictMode>
      </div>
    </>
  );
}
