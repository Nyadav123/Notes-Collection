import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: "0",

        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3 ">
            copyrights &copy;Notes Collection
            <br />
            Created by : Nipun Yadav
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
