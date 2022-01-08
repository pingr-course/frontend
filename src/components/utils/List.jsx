import ListItem from './ListItem'

function List({ items }) {
  return (
    <ul>
      { items.map((str) => <ListItem key={str} text={str} />) }
    </ul>
  )
}

export default List
