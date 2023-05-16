export type AppEnv = 'production' | 'development'

const getAppEnv = (): AppEnv => (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) || 'development'

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return 'https://backend.bclh.link'
    case 'development':
    default:
      return 'https://backend.bclh.link'
  }
}

export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN
