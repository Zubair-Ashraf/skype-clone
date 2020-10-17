import React from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";
import ErrorMessage from "../FieldError";

const Index = ({
  id,
  label,
  required,
  name,
  className,
  disabled,
  type,
  placeholder,
  rows,
  as,
}) => {
  const [field, meta, helpers] = useField({ name });
  return (
    <React.Fragment>
      <Form.Control
        id={id || name}
        type={type}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        as={as}
        rows={rows}
        {...field}
      />
      <ErrorMessage meta={meta} />
    </React.Fragment>
  );
};

export default Index;
