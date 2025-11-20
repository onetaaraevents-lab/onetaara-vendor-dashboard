import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Sidebar(){
return (
<aside className="min-h-screen p-4 bg-white border-r w-60">
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