import './LabeledInput.css'

// caixa de texto, input

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