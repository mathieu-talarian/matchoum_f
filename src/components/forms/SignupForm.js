import { Formik } from 'formik'
import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const SignupForm = ({ submit }) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  const validate = values => {
    const errors = {}
    if (!values.firstname) {
      errors.firstname = 'Required'
    }
    if (!values.lastname) {
      errors.lastname = 'Required'
    }
    if (!values.pseudo) {
      errors.pseudo = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'email invalide'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = 'Required'
    } else if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = 'les mots de passe ne sont pas identiques'
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
      <Form.Field error={!!errors.firstname}>
        <Form.Input
          label='Prenom'
          type='text'
          name='firstname'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstname}
        />
        {errors.firstname && touched.firstname && errors.firstname}
      </Form.Field>
      <Form.Field error={!!errors.lastname}>
        <Form.Input
          label='Nom'
          type='text'
          name='lastname'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastname}
        />
        {errors.lastname && touched.lastname && errors.lastname}
      </Form.Field>
      <Form.Field error={!!errors.pseudo}>
        <Form.Input
          label='Pseudo'
          type='text'
          name='pseudo'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pseudo}
        />
        {errors.pseudo && touched.pseudo && errors.pseudo}
      </Form.Field>
      <Form.Field error={!!errors.email}>
        <Form.Input
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && errors.email}
      </Form.Field>
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

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default SignupForm
