/* eslint-disable @typescript-eslint/no-var-requires */
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs')

/* eslint-disable @typescript-eslint/no-var-requires */
const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blockchain-lighthouse.s3.ap-northeast-2.amazonaws.com'],
  },
})

module.exports = withSentryConfig(nextConfig, { silent: true }, { hideSourcemaps: true })
