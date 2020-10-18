import React from "react";
import {
  Form,
  InputGroup,
  Image,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faSearch,
  faKeyboard,
  faCommentAlt,
  faPhoneAlt,
  faAddressBook,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthDispatch, useAuthState } from "context";

function Header() {
  const dispatch = useAuthDispatch();
  const { user } = useAuthState();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.href = "/login";
  };

  return (
    <header className="px-2">
      <div className="d-flex align-items-center text-light py-3">
        <Image className="avatar" src={"https://i.redd.it/6onq25y0sh311.jpg"} />
        <span className="ml-2 font-sm text-capitalize">
          {user && user.username}
        </span>
        <Dropdown as={ButtonGroup} className="ml-auto" drop="bottom">
          <Dropdown.Toggle>
            <FontAwesomeIcon icon={faEllipsisH} size="lg" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-secondary">
            <Dropdown.Item className="text-light font-sm">
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-light font-sm">
              Help & feedback
            </Dropdown.Item>
            <Dropdown.Item className="text-light font-sm">
              Kayboard shortcuts
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className="text-light font-sm"
              onClick={handleLogout}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <InputGroup className="mt-auto mb-auto text-gray">
        <FontAwesomeIcon icon={faSearch} size="sm" className="ml-2 mt-2" />
        <Form.Control
          className="searchbar"
          placeholder="People, group & messages"
        />
        <div className="border-left-gray px-2 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faKeyboard} size="sm" />
        </div>
      </InputGroup>
      <div className="d-flex justify-content-between text-light mt-4 px-3">
        <div className="d-flex flex-column align-items-center text-info">
          <FontAwesomeIcon icon={faCommentAlt} size="lg" />
          <span className="font-xs mt-2">Chats</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          <span className="font-xs mt-2">Calls</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faAddressBook} size="lg" />
          <span className="font-xs mt-2">Contacts</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span className="font-xs mt-2">Notifications</span>
        </div>
      </div>
      <hr className="bg-light-gray" />
      <span className="text-muted font-weight-bold font-sm">CHATS</span>
    </header>
  );
}

export default Header;
