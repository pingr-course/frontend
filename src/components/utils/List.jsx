// Single Responsibility Principle
// S em SOLID

function List({ items }) {
  // loop em forma de 'map'

  function stringToLI(str) {
    return (
      <li key={str}>
        {str}
      </li>
    )
  }

  return (
    <ul>
      {items.map(stringToLI)}
    </ul>
  )
}

export default List