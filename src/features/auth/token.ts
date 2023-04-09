export const getAccessTokenFromLocalStorage = () => {
  if (typeof window === 'undefined') {
    return null
  }

  return localStorage.getItem('acToken')
}

export const setAccessTokenToLocalStorage = (acToken: string) => {
  localStorage.setItem('acToken', acToken)
}

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('acToken')
}

export const isLoggedIn = () => Boolean(getAccessTokenFromLocalStorage())
