import React from 'react'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom'


export default function Navbar(){
const logout = useAuthStore(s => s.logout)
const navigate = useNavigate()
return (
<header className="flex items-center justify-between p-4 bg-white shadow">
<div className="font-bold">Onetaara Vendor Panel</div>
<div className="flex items-center gap-3">
<button onClick={()=>{logout(); navigate('/login')}} className="text-sm text-red-600">Logout</button>
</div>
</header>
)
}