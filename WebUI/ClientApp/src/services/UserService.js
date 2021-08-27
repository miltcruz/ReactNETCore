export const getUsers = async() => {
    const response = await fetch('/api/user')
    return await response.json()
}

export const addUser = async user => {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })

    return await response.json()
}