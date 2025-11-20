import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


export default function Layout({ children }){
return (
<div className="min-h-screen flex">
<Sidebar />
<div className="flex-1">
<Navbar />
<main>{children}</main>
</div>
</div>
)
}