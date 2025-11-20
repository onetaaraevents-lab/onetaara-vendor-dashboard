import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getProfile, updateProfile } from '../api/vendor'


export default function Profile(){
const [form, setForm] = useState({})
const [loading, setLoading] = useState(false)


useEffect(()=>{
getProfile().then(r => setForm(r.data)).catch(()=>{})
},[])


async function save(){
setLoading(true)
try{
await updateProfile(form)
alert('Saved')
}catch(e){ alert('Save failed') }
setLoading(false)
}


return (
<Layout>
<div className="max-w-2xl p-6">
<h2 className="mb-4 text-xl font-semibold">Your profile</h2>
<label className="block mb-2">Company name</label>
<input value={form.company_name || ''} onChange={e=>setForm({...form, company_name: e.target.value})} className="w-full p-2 mb-3 border rounded" />
<label className="block mb-2">Phone</label>
<input value={form.phone || ''} onChange={e=>setForm({...form, phone: e.target.value})} className="w-full p-2 mb-3 border rounded" />
<button onClick={save} className="px-4 py-2 text-white bg-indigo-600 rounded" disabled={loading}>{loading? 'Saving...': 'Save'}</button>
</div>
</Layout>
)
}