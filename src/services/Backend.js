const backendUrl = 'http://localhost:5000'

export async function createAccount(account) {
  const res = await fetch(backendUrl + '/accounts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(account)
  })

  const data = await res.json()

  return {
    status: res.status,
    payload: data
  }
}

export async function getAccount(id) {
  const res = await fetch(backendUrl + `/accounts/${id}`)
  const data = await res.json()

  return {
    status: res.status,
    payload: data
  }
}

export async function getAccounts() {
  const res = await fetch(backendUrl + '/accounts')
  const data = await res.json()

  return {
    status: res.status,
    payload: data
  }
}