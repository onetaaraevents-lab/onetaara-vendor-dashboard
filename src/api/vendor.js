import api from './client'


export const loginVendor = (username, password) =>
api.post('/jwt-auth/v1/token', { username, password })


export const getProfile = () =>
api.get('/onetaara/v1/vendor/profile')


export const updateProfile = (data) =>
api.post('/onetaara/v1/vendor/profile', data)


export const uploadDocument = (formData) =>
api.post('/onetaara/v1/vendor/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })