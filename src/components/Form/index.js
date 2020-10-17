import React from "react";
import { Formik } from "formik";

const Form = ({
  initialValues,
  onSubmit,
  children,
  validationSchema,
  className,
  style,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ handleSubmit, resetForm, values }) => (
        <form onSubmit={handleSubmit} className={className} style={style}>
          {children}
        </form>
      )}
    </Formik>
  );
};

export default Form;
