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
    </aside>
  )
}

export default CallToAction