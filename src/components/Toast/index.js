import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ error }) => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    error && setShow(true);
    setTimeout(() => setShow(false), 3000);
  }, [error]);

  const handleShow = () => {
    setShow(false);
  };
  return (
    <div
      className={`alert error-alert py-3 align-items-center ${
        show ? "d-flex" : "d-none"
      }`}
      onClick={handleShow}
    >
      <FontAwesomeIcon
        icon={faInfoCircle}
        size="lg"
        className="mr-3 text-danger"
      />
      <span>{error.message}</span>
      <FontAwesomeIcon
        icon={faTimes}
        className="ml-auto font-weight-lighter"
        onClick={handleShow}
      />
    </div>
  );
};

export default Alert;
