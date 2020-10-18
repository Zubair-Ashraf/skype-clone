import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useMessageState } from "context";

function Navbar() {
  const { users } = useMessageState();
  const selectedUser = users?.find((user) => user.selected === true)?.username;
  return (
    <Container
      fluid
      className="p-0 pt-3 px-2 d-flex justify-content-between align-items-center"
    >
      <div>
        <h3 className="text-light font-weight-bold text-capitalize">
          {selectedUser}
        </h3>
        <p className="text-gray font-sm">Last seen 2d ago</p>
      </div>
      <div>
        <Button className="icon-button">
          <FontAwesomeIcon icon={faVideo} size="md" />
        </Button>
        <Button className="icon-button mx-2">
          <FontAwesomeIcon icon={faPhone} size="md" />
        </Button>
        <Button className="icon-button">
          <FontAwesomeIcon icon={faUserPlus} size="md" />
        </Button>
      </div>
    </Container>
  );
}

export default Navbar;
