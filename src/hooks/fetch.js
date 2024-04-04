const baseUrl = 'https://staging-workshop-cityjs-london-2024-auJTOQ.keelapps.xyz/api/json/'

export async function useGetTodos() {
    return fetch(`${baseUrl}listTodos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            first: 1e6
        })
    })
        .then((res) => res.json())
        .then((data) => data.results)
}

export async function createTodo(label) {
    return fetch(`${baseUrl}createTodo`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({label})
    })
        .then((res) => res.json())
        .then((data) => window.location.reload())
}