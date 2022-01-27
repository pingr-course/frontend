import { Link } from 'react-router-dom'

import List from './utils/List'

function CallToAction({ className }) {
  const actions = [
    "Be direct and interact with your friends",
    "See what your friends are saying",
    "Discuss about trends"
  ]

  return (
    <aside className={className}>
      <h2>Pingr, where you can express yourself!</h2>

      <List items={actions} />

      <Link to="/profiles">See who's already here!</Link>
    </aside>
  )
}

export default CallToAction