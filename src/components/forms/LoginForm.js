import { Formik } from 'formik'
import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const LoginForm = ({ submit }) => {
  const initialValues = { email: '', password: '' }
  const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    submit(values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  const form = (
    {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    } /* and other goodies */
  ) => (
    <Form onSubmit={handleSubmit} loading={!!isSubmitting}>
      <Form.Field>
        <Form.Input
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={!!errors.email}
        />
        {errors.email && touched.email && errors.email}
      </Form.Field>
      <Form.Field>
        <Form.Input
          label='Mot de passe'
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={!!errors.password}
        />
        {errors.password && touched.password && errors.password}
      </Form.Field>
      <Form.Field>
        <Form.Button primary fluid type='submit' disabled={isSubmitting}>
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

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
