import './LabeledInput.css'

function LabeledInput({ label, type, value, onChange }) {
  return (
    <div className="input-control">
      <label>
        {label}
      </label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default LabeledInput
