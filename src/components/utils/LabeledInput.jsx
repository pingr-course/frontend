import './LabeledInput.css'

// caixa de texto, input

function LabeledInput({ label, type }) {
  return (
    <div className="input-control">
      <label>
        { label }
      </label>
      <input type={type} />
    </div>
  )
}

export default LabeledInput