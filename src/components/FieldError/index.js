import React from "react";
import { useFormikContext } from "formik";

const FieldMessage = ({ meta }) => {
  const { submitCount } = useFormikContext();
  const showError = (submitCount > 0 || meta.touched) && meta.error;
  return (
    <div className="invalid-feedback" style={{ display: "block" }}>
      {showError ? meta.error : null}
    </div>
  );
};

export default FieldMessage;
