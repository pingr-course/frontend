import LabeledInput from './utils/LabeledInput'
import Submit from './utils/Submit'

function RegistrationForm({ className }) {
  return (
    <main style={{ width: '100%' }} className={className}>
      <form style={{ margin: '1rem' }} onSubmit={(e) => e.preventDefault()}>
        <LabeledInput
          label="Username"
          type="text"
        />
        <LabeledInput
          label="Email"
          type="email"
        />
        <LabeledInput
          label="Password"
          type="password"
        />
        <LabeledInput
          label="Confirmation"
          type="password"
        />

        <Submit label="Create" />
      </form>
    </main>
  )
}

export default RegistrationForm