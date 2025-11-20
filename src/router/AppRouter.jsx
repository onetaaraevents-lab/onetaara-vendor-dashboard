import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Deliverables from '../pages/Deliverables'
import Documents from '../pages/Documents'
import Tasks from '../pages/Tasks'
import Payments from '../pages/Payments'
import { useAuthStore } from '../store/authStore'


function Protected({ children }){
const token = useAuthStore(s => s.token)
if(!token) return <Navigate to="/login" replace />
return children
}


export default function AppRouter(){
return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<Login/>} />
<Route path="/" element={<Protected><Dashboard/></Protected>} />
<Route path="/profile" element={<Protected><Profile/></Protected>} />
<Route path="/deliverables" element={<Protected><Deliverables/></Protected>} />
<Route path="/documents" element={<Protected><Documents/></Protected>} />
<Route path="/tasks" element={<Protected><Tasks/></Protected>} />
<Route path="/payments" element={<Protected><Payments/></Protected>} />
</Routes>
</BrowserRouter>
)
}