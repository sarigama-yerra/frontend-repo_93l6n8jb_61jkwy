import { useState } from 'react'

export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', project_type: '', budget_range: '', message: '' })
  const [status, setStatus] = useState(null)

  const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true })
    try {
      const res = await fetch(`${backendBase}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ success: true, id: data.id })
      setForm({ name: '', email: '', phone: '', location: '', project_type: '', budget_range: '', message: '' })
    } catch (err) {
      setStatus({ error: err.message || 'Something went wrong' })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Start your project</h2>
        <p className="mt-4 text-gray-600">Tell us a bit about your vision. Well follow up to schedule a design consultation.</p>
        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 col-span-1" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 col-span-1" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 col-span-1" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="City / neighborhood" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 col-span-1" />
          <input name="project_type" value={form.project_type} onChange={handleChange} placeholder="Project type (e.g., pool, patio, kitchen)" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 sm:col-span-2" />
          <select name="budget_range" value={form.budget_range} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 col-span-1">
            <option value="">Budget range</option>
            <option>50k - 100k</option>
            <option>100k - 200k</option>
            <option>200k - 400k</option>
            <option>400k+</option>
          </select>
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Describe your space and goals" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 sm:col-span-2"></textarea>
          <button type="submit" className="mt-2 bg-gray-900 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition sm:col-span-2">Request Consultation</button>
        </form>
        {status?.loading && <p className="mt-4 text-gray-600">Sending...</p>}
        {status?.success && (
          <p className="mt-4 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">Thanks! Your request was received. Ref: {status.id}</p>
        )}
        {status?.error && (
          <p className="mt-4 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{status.error}</p>
        )}
      </div>
    </section>
  )
}
