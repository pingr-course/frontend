import './Submit.css'

function Submit({ label }) {
  return (
    <input
      type="submit"
      className="submit-btn"
      value={label}
    />
  )
}

export default Submit
