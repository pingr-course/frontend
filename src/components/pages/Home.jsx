import './Home.css'
import CallToAction from '../CallToAction'

import LabeledInput from '../utils/LabeledInput'
import Submit from '../utils/Submit'

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

      <div className="right">

        <LabeledInput label="username" type="text" />
        <Submit label="create account" />

      </div>

      <div className="foot" style={ blueBar }></div>
    </div>
  )
}

export default Home