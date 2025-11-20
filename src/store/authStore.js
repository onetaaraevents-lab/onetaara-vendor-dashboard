import create from 'zustand'


export const useAuthStore = create((set) => ({
token: localStorage.getItem('vendor_token') || null,
user: JSON.parse(localStorage.getItem('vendor_user') || 'null'),
setAuth: (token, user) => {
localStorage.setItem('vendor_token', token)
localStorage.setItem('vendor_user', JSON.stringify(user))
set({ token, user })
},
logout: () => {
localStorage.removeItem('vendor_token')
localStorage.removeItem('vendor_user')
set({ token: null, user: null })
}
}))