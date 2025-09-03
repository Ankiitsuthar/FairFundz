"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  function update(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  function submit(e) {
    e.preventDefault()
    alert(`Thanks, ${form.name}! We'll get back to you.`)
  }

  return (
    <section className="section">
      <h2>Contact</h2>
      <p className="help">Questions? Reach out and we’ll respond promptly.</p>
      <form onSubmit={submit} className="grid" style={{ maxWidth: 520 }}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" className="input" value={form.name} onChange={update} required />

        <label className="label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className="input" value={form.email} onChange={update} required />

        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="textarea"
          rows="5"
          value={form.message}
          onChange={update}
          required
        />

        <div>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
        </div>
      </form>
    </section>
  )
}
