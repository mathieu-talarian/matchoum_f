import api from '../api'
import { PHOTO_UPLOADED } from '../types'

export const photoUploaded = () => ({
  type: PHOTO_UPLOADED
})

export const uploadPhoto = photo => dispatch =>
  api.photo.upload(photo).then(() => dispatch(photoUploaded(PHOTO_UPLOADED)))
