import "./Home.css"

import CallToAction from '../CallToAction'
import RegistrationForm from '../RegistrationForm'

function Home() {
  return (
    <div className="Home">
      <div className="nav" style={{ backgroundColor: '#000', height: '100%' }}></div>
      <CallToAction className="left" />
      <RegistrationForm className="right" />
      <div className="foot" style={{ backgroundColor: '#000', height: '100%'}}></div>
    </div>
  );
}

export default Home;
