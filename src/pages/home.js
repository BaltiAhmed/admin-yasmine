import React from "react";
import SerieDashboard from "../components/dashboard/series";
import PalletteDashboard from "../components/dashboard/palette";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <SerieDashboard />
        </Col>
        <Col>
          <PalletteDashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
