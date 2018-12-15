import React from 'react'
import { Form } from 'semantic-ui-react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import SearchTagsForm from './SearchTagsForm'

const ProfilForm = ({ submit }) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    age: '',
    orientation: '',
    gender: '',
    bio: '',
    tags: []
  }

  const genderOptions = [
    { key: 'm', text: 'Male', value: 'm' },
    { key: 'f', text: 'Female', value: 'f' }
  ]

  const orientationOptions = [
    { key: 'hetero', text: 'Heterosexuel', value: 'heterosexuel' },
    { key: 'bisexuel', text: 'Bisexuel', value: 'bisexuel' },
    { key: 'homosexuel', text: 'Homosexuel', value: 'homosexuel' }
  ]

  const validate = ({
    firstname,
    lastname,
    age,
    pseudo,
    gender,
    orientation,
    bio,
    tags
  }) => {
    const errors = {}
    if (!firstname) errors.firstname = 'Veuillez remplir votre prenom'
    if (!lastname) errors.lastname = 'Veuillez remplir votre nom'
    if (!age) errors.age = 'Veuillez renseigner votre age'
    if (!pseudo) errors.pseudo = 'Veuillez remplir votre pseudo'
    if (!gender) errors.gender = 'veuillez choisir un genre'
    if (!orientation) errors.orientation = 'veuillez choisir une orientation'
    if (!bio) errors.bio = 'veuillez ecrire une courte biographie'
    if (!tags) {
      errors.tags = "veuillez choisir au moins un centre d'interet"
    } else {
      if (tags.length === 0) {
        errors.tags = "veuillez choisir au moins un centre d'interet"
      }
    }
    console.log(errors)
    return errors
  }

  const onSubmit = (values, { setValidating, setSubmitting }) => {
    setSubmitting(true)
    setValidating(true)
    submit(values)
  }

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
  }) => (
    <Form onSubmit={handleSubmit} loading={!!isSubmitting}>
      <Form.Field error={!!errors.firstname}>
        <Form.Input
          label='Prenom'
          type='text'
          name='firstname'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstname || ''}
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
          value={values.lastname || ''}
        />
        {errors.lastname && touched.lastname && errors.lastname}
      </Form.Field>
      <Form.Field error={!!errors.age}>
        <Form.Input
          label='Age'
          type='number'
          name='age'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age || ''}
        />
        {errors.age && touched.age && errors.age}
      </Form.Field>
      <Form.Field error={!!errors.pseudo}>
        <Form.Input
          label='Pseudo'
          type='text'
          name='pseudo'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pseudo || ''}
        />
        {errors.pseudo && touched.pseudo && errors.pseudo}
      </Form.Field>
      <Form.Field error={!!errors.gender}>
        <Form.Dropdown
          fluid
          selection
          name='gender'
          label='Gender'
          options={genderOptions}
          placeholder='Gender'
          onChange={(e, { name, value }) => {
            if (name) {
              setFieldValue(name, value)
            }
          }}
          onBlur={(e, { name, value }) => {
            if (name) {
              setFieldValue(name, value)
              setFieldTouched(name)
            }
          }}
          value={values.gender}
        />
        {errors.gender && touched.gender && errors.gender}
      </Form.Field>
      <Form.Field error={!!errors.orientation}>
        <Form.Dropdown
          fluid
          selection
          name='orientation'
          label='Orientation'
          options={orientationOptions}
          placeholder='Gender'
          onChange={(e, { name, value }) => {
            if (name) {
              setFieldValue(name, value)
            }
          }}
          onBlur={(e, { name, value }) => {
            if (name) {
              setFieldValue(name, value)
              setFieldTouched(name)
            }
          }}
          value={values.orientation}
        />
        {errors.orientation && touched.orientation && errors.orientation}
      </Form.Field>
      <Form.Field error={!!errors.bio}>
        <Form.TextArea
          label='Votre biographie'
          placeholder='dites en plus sur vous'
          name='bio'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.bio}
        />
      </Form.Field>
      <Form.Field error={!!errors.tags}>
        <SearchTagsForm
          tags={values.tag || []}
          onChange={(e, { name, value }) => setFieldValue('tags', value)}
        />
      </Form.Field>
      <Form.Field>
        <Form.Button type='submit' primary fluid disabled={isSubmitting}>
          Submit
        </Form.Button>
      </Form.Field>
    </Form>
  )
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

ProfilForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default ProfilForm
