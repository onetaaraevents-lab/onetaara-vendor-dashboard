import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Sidebar(){
return (
<aside className="w-60 bg-white border-r min-h-screen p-4">
<nav className="flex flex-col gap-2">
<NavLink to="/" className={({isActive}) => isActive ? 'font-semibold' : ''}>Dashboard</NavLink>
<NavLink to="/profile">Profile</NavLink>
<NavLink to="/deliverables">Deliverables</NavLink>
<NavLink to="/documents">Documents</NavLink>
<NavLink to="/tasks">Tasks</NavLink>
<NavLink to="/payments">Payments</NavLink>
</nav>
</aside>
)
}