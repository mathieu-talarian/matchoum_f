import React from 'react'
import { Formik } from 'formik'
import { Form } from 'semantic-ui-react'
import { Slider } from 'antd'
import 'antd/dist/antd.css'
const SearchForm = props => {
  const initialValues = {
    name: '',
    rangeAge: []
  }
  const validate = () => {
    const errors = {}
    return errors
  }

  //   const createFormFields = ({ errors, type: Component, props }) => (
  //     <Form.Field {...errors}>
  //       <Component {...props} />
  //     </Form.Field>
  //   )

  const onSubmit = (values, { isSubmitting }) => console.log(values)
  const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    setFieldTouched
  }) => {
    return (
      <Form onSubmit={handleSubmit} loading={!!isSubmitting}>
        <Form.Field>
          <Slider
            range
            step={1}
            name='rangeAge'
            defaultValue={[20, 50]}
            onChange={value => {
              setFieldValue('rangeAge', value)
            }}
          />
          AgeMin:{(values && values.rangeAge[0]) || 20} AgeMax:
          {(values && values.rangeAge[1]) || 50}
        </Form.Field>
      </Form>
    )
  }
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {form}
    </Formik>
  )
}

export default SearchForm
