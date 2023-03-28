import axios, { AxiosRequestConfig } from 'axios'

import { getApiEndpoint } from '@/envs'
import { getAccessTokenFromLocalStorage } from '@/features/auth/token'

export const createApi = () => {
  const accessToken = getAccessTokenFromLocalStorage()

  const _api = axios.create({
    baseURL: getApiEndpoint(),
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  })

  _api.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error)
    }
  )

  _api.interceptors.request.use((config) => {
    return config
  })

  return _api
}

export interface ServerResponse<T> {
  statusCode: number
  payload: T
}

const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    createApi()
      .get<ServerResponse<T>>(url, config)
      .then((res) => res.data),
  post: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    createApi()
      .post<ServerResponse<T>>(url, payload, config)
      .then((res) => res.data),
}

export default api
