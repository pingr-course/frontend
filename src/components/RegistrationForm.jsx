import { useState } from 'react'

import LabeledInput from './utils/LabeledInput'
import Submit from './utils/Submit'

import { createAccount } from '../services/Backend'

function RegistrationForm({ className }) {
  const [username, setUsername] = useState('')
  const updateUsername = (e) => {
    setUsername(e.target.value)
  }

  const [email, setEmail] = useState('')
  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('')
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const [confirmation, setConfirmation] = useState('')
  const updateConfirmation = (e) => {
    setConfirmation(e.target.value)
  }

  const [loading, setLoading] = useState(false)

  const submitRegistration = async (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)

    const account = {
      username,
      email,
      password
    }

    const { status, payload } = await createAccount(account)

    setLoading(false)

    if (status >= 200 && status < 300) {
      alert(`Successfully created! Your id is ${payload.id}`)
    }
  }

  return (
    <main style={{ width: '100%' }} className={className}>
      <form style={{ margin: '1rem' }} onSubmit={submitRegistration}>
        <LabeledInput
          label="Username"
          type="text"
          value={username}
          onChange={updateUsername}
        />
        <LabeledInput
          label="Email"
          type="email"
          value={email}
          onChange={updateEmail}
        />
        <LabeledInput
          label="Password"
          type="password"
          value={password}
          onChange={updatePassword}
        />
        <LabeledInput
          label="Confirmation"
          type="password"
          value={confirmation}
          onChange={updateConfirmation}
        />

        {loading ? '&nbsp;' : <Submit label="Create" />}
      </form>
    </main>
  )
}

export default RegistrationForm