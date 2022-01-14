import './Home.css'
import CallToAction from '../CallToAction'
import RegistrationForm from '../RegistrationForm'

function Home() {
  const blackBar = {
    backgroundColor: 'black',
    height: '100%'
  }

  const blueBar = {
    backgroundColor: 'blue',
    height: '100%'
  }

  return (
    <div className="Home">
      <div className="nav" style={ blackBar }></div>

      <CallToAction className="left" />
      <RegistrationForm className="right" />

      <div className="foot" style={ blueBar }></div>
    </div>
  )
}

export default Home