import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getProfile } from '../api/vendor'


export default function Dashboard(){
const [profile, setProfile] = useState(null)
useEffect(()=>{
let mounted = true
getProfile().then(r=>{ if(mounted) setProfile(r.data) }).catch(()=>{})
return ()=> mounted=false
},[])


return (
<Layout>
<div className="p-6">
<h1 className="mb-4 text-2xl font-bold">Welcome{profile?.company_name ? `, ${profile.company_name}` : ''}</h1>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 bg-white rounded shadow">Status: <strong>{profile?.status || 'Pending'}</strong></div>
<div className="p-4 bg-white rounded shadow">Pending tasks: 4</div>
<div className="p-4 bg-white rounded shadow">Documents: {profile?.documents?.length || 0}</div>
</div>
</div>
</Layout>
)
}
