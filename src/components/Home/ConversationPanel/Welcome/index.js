import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Button } from "react-bootstrap";
import { useAuthState } from "context";

function Welcome() {
  const { user } = useAuthState();
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h3 className="text-light">Welcome, {user && user.username}</h3>
      <Image
        className="avatar-lg mt-3"
        src={"https://i.redd.it/6onq25y0sh311.jpg"}
      />
      <div className="mt-4 text-center">
        <Button variant="light" className="rounded-pill px-3 font-weight-bold">
          Star a conversation
        </Button>
        <p className="text-gray font-sm mt-3">
          Search for someone to start chating with or go to
          <br /> Contact to see who is available
        </p>
      </div>
      <div className="text-center position-absolute bottom-10">
        <h6 className="text-light">You are signed in a {user && user.email}</h6>
        <p className="text-gray">
          Try <Link>switching accounts</Link> if you cannot see your contact or
          conversation history.{" "}
        </p>
      </div>
    </Container>
  );
}

export default Welcome;
