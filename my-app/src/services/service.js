export async function getBrowserDetails(data) {
    const response = await fetch(`http://localhost:8000/getBrowserDetails`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    })
    return await response.json();
}

export async function getIP() {
    const response = await fetch('https://geolocation-db.com/json/', {
        method: 'get'
    })
    return response.json()
}