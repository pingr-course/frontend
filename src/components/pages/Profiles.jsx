import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'

import List from '../utils/List'

function Profiles() {
  const [usernames, setUsernames] = useState([])

  const [counter, setCounter] = useState(0)

  // useEffect( fun, lista de observações )
  useEffect(() => {
    fetch('http://localhost:5000/accounts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        const unames = data.map((account) => account.username)
        setUsernames(unames)
      })
      .catch((error) => console.log(error))
  }, [counter])

  return (
    <main>
      <List items={usernames} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <Link to="/">Go Back</Link>
    </main>
  )
}

export default Profiles