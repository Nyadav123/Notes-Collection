import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Header/Loading";
import Error from "../../components/Header/Error";
import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./LoginPage.css";
const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <Error variant="danger">{error}</Error>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="py-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: "black" }}
          >
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? &nbsp;
            <Link to="/register" className="regs">
              Register Here
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginPage;
