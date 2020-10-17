import React, { useState } from "react";
import { Toast } from "components";

const ErrorBoundary = (WrappedComponent) => {
  function HOC(props) {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    return (
      <React.Fragment>
        {error && <Toast error={error} />}
        <WrappedComponent
          {...props}
          setError={setError}
          setMessage={setSuccess}
        />
      </React.Fragment>
    );
  }

  return HOC;
};

export default ErrorBoundary;
