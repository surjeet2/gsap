import React, { useState } from 'react'

export default function Form() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSignupInfo((prev) => ({ ...prev, [name]: value }))
    console.log("Form Data:", { ...signupInfo, [name]: value }) // realtime log
  }

const handleSubmit = (e) => {
  e.preventDefault()
  
 

  console.log("Form Submitted:", signupInfo)
  alert("Form submitted successfully!")
  setSignupInfo({ name: '', email: '', password: '' })
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
          Signup Form
        </h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        value={signupInfo.name}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
         value={signupInfo.email}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
       value={signupInfo.password}
       />

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
