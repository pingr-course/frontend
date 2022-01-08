import List from './utils/List'

function CallToAction({ className }) {
  const phrases = [
    'Be direct and reach out to your friends',
    'See what your friends are thinking',
    'Interact with those you appreciate',
    'Debate ideas about trends'
  ]

  return (
    <aside className={className}>
      <h2>Pingr, where you can express yourself!</h2>

      <List items={phrases} />
    </aside>
  )
}

export default CallToAction
