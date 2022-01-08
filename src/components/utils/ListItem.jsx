function ListItem({ text }) {
  const liStyle = {
    lineHeight: '2rem'
  }

  return <li style={liStyle}>{ text }</li>
}

export default ListItem
