import React, {
  Component,
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchSettingsForm from '../forms/SearchSettingsForm'
import reducer from '../../store'

const SearchSettingsPage = ({ initialCount }) => {
  return (
    <>
      Parametres de recherche
      <SearchSettingsForm />
    </>
  )
}

export default connect(
  state => ({ count: state.count }),
  null
)(SearchSettingsPage)
