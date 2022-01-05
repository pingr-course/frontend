import './LabeledInput.css'

function LabeledInput({ id, value, onChange, label, error, type }) {
  const hasError = error?.length > 0
  const errorMessage = hasError ? error : ''

  return (
    <div className="input-control">
      <label htmlFor={id}>
        {label}
      </label>
      <input type={type} className={hasError ? "error" : ''} id={id} value={value} onChange={onChange} />
      { hasError && <p className="error">{errorMessage}</p>}
    </div>
  )
}

export default LabeledInput
