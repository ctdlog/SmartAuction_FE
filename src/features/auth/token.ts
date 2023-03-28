export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('acToken')
}

export const setAccessTokenToLocalStorage = (acToken: string) => {
  localStorage.setItem('acToken', acToken)
}
