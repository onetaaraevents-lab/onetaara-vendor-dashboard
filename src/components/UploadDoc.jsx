// src/components/UploadDoc.jsx
import React, { useState } from 'react'
import api from '../api/client' // axios instance

export default function UploadDoc({ onUploaded }) {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)

  async function handleUpload(e) {
    e.preventDefault()
    if (!file) return alert('Choose a file')

    const fd = new FormData()
    fd.append('file', file)

    try {
      setLoading(true)
      const res = await api.post('/onetaara/v1/vendor/upload', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (evt) => {
          setProgress(Math.round((evt.loaded / evt.total) * 100))
        }
      })
      setProgress(0)
      setFile(null)
      onUploaded && onUploaded(res.data)
      alert('Uploaded')
    } catch(err) {
      console.error(err)
      alert(err?.response?.data?.message || 'Upload failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-lg p-4 bg-white rounded shadow">
      <form onSubmit={handleUpload}>
        <label className="block mb-2">Select document</label>
        <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-3" />
        {progress>0 && <div className="mb-2">Uploading... {progress}%</div>}
        <button className="px-4 py-2 text-white bg-indigo-600 rounded" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  )
}