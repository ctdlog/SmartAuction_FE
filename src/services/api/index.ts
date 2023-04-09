import axios, { AxiosError, AxiosRequestConfig } from 'axios'

import { getApiEndpoint } from '@/envs'
import { getAccessTokenFromLocalStorage } from '@/features/auth/token'

export interface RegenerateAccessTokenByRefreshTokenResponse {
  acToken: string
  acTokenExpiresAt: number
}

// export const regenerateAccessTokenByRefreshToken = () => {
//   return api.post<RegenerateAccessTokenByRefreshTokenResponse>('/users/refresh')
// }

export const createApi = () => {
  const accessToken = getAccessTokenFromLocalStorage()

  const _api = axios.create({
    baseURL: getApiEndpoint(),
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  })

  _api.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  })

  // TODO: Refresh Token 1회만 요청하도록 기능 구현
  // type SubScribers = ((token: string) => void)[]

  // let isRefreshing = false
  // let refreshSubscribers: SubScribers = []

  // _api.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const {
  //       config,
  //       response: { status },
  //     } = error

  //     const originalRequest = config
  //     if (status === 401 && !originalRequest._retry) {
  //       if (isRefreshing) {
  //         return new Promise((resolve) => {
  //           // eslint-disable-next-line no-shadow
  //           refreshSubscribers.push((accessToken) => {
  //             originalRequest.headers.Authorization = `Bearer ${accessToken}`
  //             console.log(originalRequest)
  //             resolve(_api(originalRequest))
  //           })
  //         })
  //       }

  //       originalRequest._retry = true
  //       isRefreshing = true

  //       return (
  //         new Promise((resolve, reject) => {
  //           regenerateAccessTokenByRefreshToken().then(({ payload: { acToken } }) => {
  //             originalRequest.headers.Authorization = `Bearer ${acToken}`

  //             refreshSubscribers.forEach((subscriber) => subscriber(acToken))
  //             refreshSubscribers = []
  //             console.log('resolved')
  //             resolve(_api(originalRequest))
  //           })
  //         })
  //           // eslint-disable-next-line no-shadow
  //           .catch((error: AxiosError) => {
  //             return Promise.reject(error)
  //           })
  //           .finally(() => {
  //             isRefreshing = false
  //           })
  //       )
  //     }

  //     return Promise.reject(error)
  //   }
  // )

  return _api
}

export interface ServerResponse<T> {
  statusCode: number
  payload: T
}

const _api = createApi()

const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    _api.get<ServerResponse<T>>(url, config).then((res) => res.data),
  post: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    _api.post<ServerResponse<T>>(url, payload, config).then((res) => res.data),
}

export default api
