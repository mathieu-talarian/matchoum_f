import { Formik } from "formik";
import React from "react";
import { Form, Segment } from "semantic-ui-react";

const ForgotPasswordForm = ({ submit }) => {
  const initialValues = {
    email: ""
  };

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "email invalide";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    submit(values);
  };
  const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => (
    <Form onSubmit={handleSubmit} loading={isSubmitting ? true : false}>
      <Form.Field>
        <Form.Input
          label="Votre email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={!!errors.email}
        />
        {errors.email && touched.email && errors.email}
      </Form.Field>
      <Form.Field>
        <Form.Button
          type="submit"
          primary={true}
          fluid={true}
          disabled={isSubmitting}
        >
          Reinitializer mon mot de passe
        </Form.Button>
      </Form.Field>
    </Form>
  );
  return (
    <Segment raised={true}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {form}
      </Formik>
    </Segment>
  );
};

export default ForgotPasswordForm;
