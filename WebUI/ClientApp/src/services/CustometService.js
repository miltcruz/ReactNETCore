import authService from '../components/api-authorization/AuthorizeService'

export const getCustomers = async () => {
    const token = await authService.getAccessToken();
    const response = await fetch('/api/customer', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    return await response.json()
}

export const addCustomer = async customer => {
    const token = await authService.getAccessToken();
    const response = await fetch('/api/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(customer)
    })

    return await response.json()
}