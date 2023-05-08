
export const saveTokenStorage = (token: string) => {
    localStorage.setItem('token', token)
}

export const removeTokenStorage = () => {
    localStorage.removeItem('token')
}
