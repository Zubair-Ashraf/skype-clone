import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { FormControl, Formik } from "components";
import { REGISTER_USER } from "gql";
import ErrorBoundary from "hoc";
import { FormSchema } from "utils";
import SKYPE_LOGO from "assets/skype-logo.png";

function Register({ setError, ...props }) {
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    update: (_, data) => props.history.push("/login"),
    onError: (error) => {
      setError({ message: error.graphQLErrors[0].message });
    },
  });

  return (
    <Container fluid className="vh-100">
      <Row className="vh-100 justify-content-center align-items-center text-center">
        <Col md={3}>
          <Formik
            initialValues={{}}
            validationSchema={FormSchema.RegisterFormSchema}
            onSubmit={(values) => registerUser({ variables: values })}
          >
            <Image src={SKYPE_LOGO} width={120} />
            <h1 className="font-weight-light mt-4 mb-5">Sign up</h1>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <FormControl type="text" name="username" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
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
                Sign up
              </Button>
            </Form.Group>
            <Link to="/login">Already have an accout</Link>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorBoundary(Register);
