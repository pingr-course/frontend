import './Submit.css'

function Submit({ label }) {
  return (
    <>
      <input className="submit-btn" type="submit" value={label} />     
    </>
  )
}

export default Submit
