import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import { FormControl, Formik } from "components";
import { FormSchema } from "utils";
import SKYPE_LOGO from "assets/skype-logo.png";

function Login() {
  return (
    <Container fluid className="vh-100">
      <Row className="vh-100 justify-content-center align-items-center text-center">
        <Col md={3}>
          <Formik
            initialValues={{}}
            validationSchema={FormSchema.LoginFormSchema}
          >
            <Image src={SKYPE_LOGO} width={120} />
            <h1 className="font-weight-light mt-4 mb-5">Sign in</h1>
            <Form.Group>
              <Form.Label>Email or username</Form.Label>
              <FormControl type="email" name="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <FormControl type="password" name="password" />
            </Form.Group>
            <Form.Group>
              <Button
                className="rounded-pill px-4 py-2 bg-primary-dark border-0"
                type="submit"
              >
                Sign in
              </Button>
            </Form.Group>
            <Link to="/register">Create new account</Link>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
