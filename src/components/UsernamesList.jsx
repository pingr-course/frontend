import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import List from './utils/List'
import { getAccounts } from '../services/Backend'

function UsernamesList() {
  const [usernames, setUsernames] = useState([])

  const fetchAccounts = async () => {
    const { payload: accounts } = await getAccounts()
    const unames = accounts.map(({ username }) => username) 

    setUsernames(unames)
  }

  useEffect(() => {
    fetchAccounts()
  }, [])
  return (
    <>
      <h1>Current Accounts</h1>
      <List items={usernames}/>

      <footer>
        <Link to="/">Back home</Link>
      </footer>
    </>
  )
}

export default UsernamesList
