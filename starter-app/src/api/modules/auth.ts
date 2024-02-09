import apiClient from '../client'

export const login = ({ email, password }: { email: string, password: string }) => apiClient({
    path: `login`,
    method: 'post',
    data: { email, password }
})
