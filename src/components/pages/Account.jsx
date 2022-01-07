import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getAccount } from '../../services/Backend'

function Account() {
  const [account, setAccount] = useState(null)
  const { id } = useParams()

  const fetchAccount = async (id) => {
    const { payload } = await getAccount(id)
    setAccount(payload)
  }

  useEffect(() => {
    fetchAccount(id)
  })
  return (
    <div>
      <h1>{account?.username}</h1>
      <Link to="/">back to home</Link>
    </div>
  )
}

export default Account
