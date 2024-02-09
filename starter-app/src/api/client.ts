const baseUrl = "https://reqres.in/api/"

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const message = await response.json()
    throw Error(message.error || 'Request error')
  }
  return response.json()
}

const apiClient = async ({ path, method, data }: apiClientProps) => {
  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: !!data ? JSON.stringify(data) : undefined
  }
  return await fetch(`${baseUrl}${path}`, requestOptions).then(handleResponse)
}

interface apiClientProps {
  path: string
  method: string
  data?: any
}

export default apiClient
