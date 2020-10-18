import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Sidebar, ConversationPanel } from "components";

function Home() {
  return (
    <Row className="vh-100 m-0">
      <Col md={3} className="bg-secondary p-0 border-right-gray">
        <Sidebar />
      </Col>
      <Col md={9} className="bg-dark">
        <ConversationPanel />
      </Col>
    </Row>
  );
}

export default Home;
