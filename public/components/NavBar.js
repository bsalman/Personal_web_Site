import React, { useState, useEffect, useRef } from "react";
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
  const { pathname } = location;

  const [isOpen, setIsOpen] = useState(false);
  const navRef = React.createRef();
  const isNavBottom = (element) => {
    return element.offsetTop;
  };
  const toggle = () => setIsOpen(!isOpen);
  const handelClose = () => setIsOpen(false);
  const handelScroll = (e) => {
    const wrappedElement = navRef.current;
    if (window.scrollY > isNavBottom(wrappedElement)) {
      wrappedElement.classList.add("sticky");
    } else {
      wrappedElement.classList.remove("sticky");
    }
  };

  useEffect(() => {
    // Adding scroll event listener to window
    window.addEventListener("scroll", handelScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <>
      <div className="container " id="todo" ref={navRef}>
        <Link to="/" class="navbar-brand  mx-lg-0">
          BS
        </Link>
        <div className="navBar_small">
          <React.StrictMode>
            <Button onClick={toggle} className="btn-toggler">
              <span
                className={`icon icon-${
                  isOpen === !false ? "x" : "list"
                } no-text`}></span>
            </Button>
            <Collapse isOpen={isOpen} className="collapse-element">
              <Card className="list-container">
                <CardBody>
                  <ListGroup>
                    <ListGroupItem className=" g-item">
                      <Link to="/" className={pathname === "/" ? "active" : ""}>
                        HOME
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item">
                      <Link
                        to="/Education"
                        className={pathname === "/Education" ? "active" : ""}>
                        EDUCATION
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item">
                      <Link
                        to="/Experience"
                        className={pathname === "/Experience" ? "active" : ""}>
                        EXPERIENCE
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item">
                      <Link
                        to="/Skills"
                        className={pathname === "/Skills" ? "active" : ""}>
                        SKILLS
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item">
                      <Link
                        to="/Contact"
                        className={pathname === "/Contact" ? "active" : ""}>
                        CONTACT
                      </Link>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </React.StrictMode>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <Link
                to="/"
                className={`${
                  pathname === "/" ? "active" : ""
                } nav-link click-scroll`}>
                HOME
              </Link>
            </li>
            <Link
              to="/Education"
              className={`${
                pathname === "/Education" ? "active" : ""
              } nav-link click-scroll`}>
              Education
            </Link>
            <li className="nav-item">
              <Link
                to="/Experience"
                className={`${
                  pathname === "/Experience" ? "active" : ""
                } nav-link click-scroll`}>
                EXPERIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Skills"
                className={`${
                  pathname === "/Skills" ? "active" : ""
                } nav-link click-scroll`}>
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={`${
                  pathname === "/Contact" ? "active" : ""
                } nav-link click-scroll`}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
