import React, { useEffect } from "react";
import "./header.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import pic from "./logout.png";
import pic2 from "./N.png";
import {} from "react-router-dom";
function Header({ setSearch }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, [userInfo]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        {/* <Navbar.Brand>Notes Collection</Navbar.Brand> */}
        <img
          alt=""
          src={pic2}
          width="25"
          height="25"
          className="d-inline-block align-top"
          style={{ marginRight: 10, borderRadius: 15 }}
        />
        <Navbar.Brand>Notes Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>

          {userInfo ? (
            <Nav>
              <Nav.Link href="/mynotes" style={{ marginLeft: 10, margin: 3 }}>
                My Notes
              </Nav.Link>
              <NavDropdown
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown"
                style={{ margin: 2, marginRight: 60 }}
              >
                <NavDropdown.Item href="/profile" style={{ margin: 2 }}>
                  <img
                    alt=""
                    src={`${userInfo.pic}`}
                    width="25"
                    height="25"
                    style={{ marginRight: 10, borderRadius: 20 }}
                  />
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={logoutHandler}
                  style={{ margin: 2 }}
                  href="/"
                >
                  <img
                    alt=""
                    src={pic}
                    width="25"
                    height="25"
                    style={{ marginRight: 10, borderRadius: 20 }}
                  />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
