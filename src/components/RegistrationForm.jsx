import { useState } from 'react/cjs/react.development'
import LabeledInput from './utils/LabeledInput'
import Submit from './utils/Submit'

function RegistrationForm({ className }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')

  function formSubmit(e) {
    e.preventDefault()

    if (password !== confirmation) {
      alert('invalid password')
      return
    }

    const account = { username, email, password }

    // axios - alternativa

    // retorna Promise
    fetch('http://localhost:5000/accounts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(account)
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }

  return (
    <main style={{ width: '100%' }} className={className}>
      <form style={{ margin: '1rem' }} onSubmit={formSubmit}>
        <LabeledInput
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LabeledInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LabeledInput
          label="Confirmation"
          type="password"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />

        <Submit label="Create" />
      </form>
    </main>
  )
}

export default RegistrationForm