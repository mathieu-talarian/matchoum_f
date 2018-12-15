import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Formik } from 'formik'

const ResetPasswordForm = ({ submit, token }) => {
  const initialValues = {
    token: token,
    password: '',
    passwordConfirmation: ''
  }
  const validate = values => {
    const errors = {}
    if (!values.password) errors.password = 'Required'
    if (values.passwordConfirmation !== values.password) {
      errors.passwordConfirmation = 'les mots de passe ne correspondent pas'
    }
    return errors
  }
  const onSubmit = (values, { setSubmitting }) => {
    submit(values)
  }

  const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => (
    <Form onSubmit={handleSubmit} loading={!!isSubmitting}>
      <Form.Field error={!!errors.password}>
        <Form.Input
          label='Mot de passe'
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password}
      </Form.Field>
      <Form.Field error={!!errors.passwordConfirmation}>
        <Form.Input
          label='Confirmez votre mot de passe'
          type='password'
          name='passwordConfirmation'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirmation}
        />
        {errors.passwordConfirmation &&
          touched.passwordConfirmation &&
          errors.passwordConfirmation}
      </Form.Field>
      <Form.Field>
        <Form.Button type='submit' primary fluid disabled={isSubmitting}>
          Submit
        </Form.Button>
      </Form.Field>
    </Form>
  )
  return (
    <Segment raised>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {form}
      </Formik>
    </Segment>
  )
}
ResetPasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
}

export default ResetPasswordForm


// handleBlur = (e, data) => {
//     if (data && data.name) {
//       this.props.setFieldValue(data.name, data.value)
//       this.props.setFieldTouched(data.name)
//     }
//   }
//   handleChange = (e, data) => {
//     if (data && data.name) {
//       this.props.setFieldValue(data.name, data.value)
//     }
//   }