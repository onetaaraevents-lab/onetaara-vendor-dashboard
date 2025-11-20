import React, { useState } from 'react'
import { loginVendor } from '../api/vendor'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const setAuth = useAuthStore(s => s.setAuth)
const navigate = useNavigate()


async function submit(e){
e.preventDefault()
setLoading(true)
try{
const res = await loginVendor(email, password)
const { token, user_email, user_nicename } = res.data
setAuth(token, { email: user_email, name: user_nicename })
navigate('/')
}catch(err){
alert(err?.response?.data?.message || 'Login failed')
}finally{setLoading(false)}
}


return (
<div className="min-h-screen flex items-center justify-center">
<form onSubmit={submit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
<h2 className="text-xl font-semibold mb-4">Vendor login</h2>
<label className="block mb-2">Email</label>
<input value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-3 p-2 border rounded" />
<label className="block mb-2">Password</label>
<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
<button className="w-full bg-indigo-600 text-white py-2 rounded" disabled={loading}>{loading? 'Signing in...':'Sign in'}</button>
</form>
</div>
)
}