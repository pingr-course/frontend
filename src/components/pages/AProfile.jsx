import { useParams } from "react-router-dom"

function AProfile() {
  // fetch no backend pela account específica
  const { id } = useParams()

  // useState para definir a conta
  // useEffect para buscar a conta no backend
  //    fetch(`http://localhost:5000/accounts/${id}`)

  return (
    <p>Página de um perfil: {id}</p>
  )
}

export default AProfile