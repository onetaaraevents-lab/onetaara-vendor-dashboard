import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import UploadDoc from '../components/UploadDoc'
import { getProfile } from '../api/vendor'

export default function Documents(){
  const [documents, setDocuments] = useState([])

  useEffect(()=>{
    getProfile().then(r => {
      const p = r.data.profile || r.data.profile
      setDocuments(p?.documents ? JSON.parse(p.documents || '[]') : (p?.documents || []))
    }).catch(()=>{})
  },[])

  return (
    <Layout>
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Documents</h2>
        <UploadDoc onUploaded={(data)=>{
          // append local UI state with the returned doc
          setDocuments(prev => [...prev, data.attachment || data])
        }} />
        <div className="grid gap-3 mt-6">
          {documents.length === 0 ? <div>No documents uploaded</div> :
            documents.map((d, i) => (
              <div key={i} className="p-3 bg-white rounded shadow">
                <a href={d.url} target="_blank" rel="noreferrer" className="text-indigo-600">{d.filename}</a>
                <div className="text-sm text-gray-500">{d.uploaded_at}</div>
              </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
