export default {
  getFieldError: (field, form) => {
    const { name } = field
    const { serverValidation } = form.status || {}
    const checkTouched = serverValidation
      ? !form.touched[name]
      : form.touched[name]
    return checkTouched && form.errors[name]
  },

  setFieldValue: (form, name, value, shouldValidate) => {
    form.setFieldValue(name, value, shouldValidate)
    form.setFieldTouched(name, true, shouldValidate)
  }
}
