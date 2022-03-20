import React, { useState, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const [setHover] = useState();
  const handleMouseIn = (e) => {
    e.target.style.background = "transparent";
    setHover(true);
  };
  const handleMouseOut = (e) => {
    e.target.style.background = "rgb(245, 245, 236)";
    setHover(false);
  };

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Notes Collection</h1>
              <p className="subtitle">One Safe place for all your notes!</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button
                  size="lg"
                  className="landingbutton"
                  style={{ backgroundColor: "black" }}
                >
                  LogIn
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                  onMouseOver={handleMouseIn}
                  onMouseOut={handleMouseOut}
                  style={{ color: "black", border: "1px solid black" }}
                >
                  SignIn
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
