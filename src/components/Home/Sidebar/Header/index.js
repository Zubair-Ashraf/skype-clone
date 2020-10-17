import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
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

function Header() {
  return (
    <header>
      <div className="d-flex align-items-center text-light py-3">
        <div className="avatar" />
        <span className="ml-2 font-sm">Zubair Ashraf</span>
        <FontAwesomeIcon icon={faEllipsisH} size="lg" className="ml-auto" />
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
