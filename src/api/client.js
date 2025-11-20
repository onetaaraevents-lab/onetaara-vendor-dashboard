import axios from 'axios'


const api = axios.create({
baseURL: import.meta.env.VITE_WP_BASE_URL || 'https://onetaara.co.in/wp-json',
withCredentials: false,
})


// attach token automatically
api.interceptors.request.use((config) => {
const token = localStorage.getItem('vendor_token')
if(token) config.headers.Authorization = `Bearer ${token}`
return config
})


export default api