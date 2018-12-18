import React from 'react'
import { Formik } from 'formik'
import { Icon, Form, Radio, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'

const SearchSettingsForm = ({ localisation }) => {
  const initialValues = {
    name: '',
    ageMin: 20,
    ageMax: 30,
    noteMin: 5,
    distance: 50,
    sexe: 0
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
          <div>AgeMin: {values.ageMin}</div>
          <input
            type='range'
            min={1}
            max={100}
            step={1}
            name='ageMin'
            value={values.ageMin}
            onChange={e => {
              const { value } = e.target
              console.log(typeof values.ageMax)
              if (values.ageMax <= value) {
                setFieldValue('ageMax', parseInt(value) + 1)
              }
              if (value < 100) {
                handleChange(e)
              }
            }}
          />
        </Form.Field>
        <Form.Field>
          <div>Age Max: {values.ageMax}</div>
          <input
            type='range'
            min={2}
            max={101}
            step={1}
            name='ageMax'
            value={values.ageMax}
            onChange={e => {
              const value = e.target.value
              if (values.ageMin >= value) {
                setFieldValue('ageMin', parseInt(value) - 1)
              }
              if (value > 0) {
                handleChange(e)
              }
            }}
          />
        </Form.Field>
        <Form.Field>
          <div>Note minimum</div>
          <Rating
            icon='star'
            defaultRating={3}
            value={values.noteMin}
            maxRating={10}
            onChange={handleChange}
          />
        </Form.Field>
        {localisation.success && (
          <Form.Field>
            <div>Distance: {values.distance} km</div>
            <input
              type='range'
              min={10}
              max={1000}
              step={10}
              name='distance'
              value={values.distance}
              onChange={handleChange}
            />
          </Form.Field>
        )}
        <Form.Field>
          <div>{values.sexe ? 'Homme' : 'Femme'}</div>
          <Radio
            toggle
            checked={values.sexe}
            name='sexe'
            onChange={(e, { name, value }) =>
              setFieldValue('sexe', !values.sexe)
            }
          />
        </Form.Field>
        <Form.Field>
          <Form.Button>
            <Icon name='search' />
            Rechercher
          </Form.Button>
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

const mapStateToProps = ({ localisation }) => ({
  localisation
})

export default connect(mapStateToProps)(SearchSettingsForm)
