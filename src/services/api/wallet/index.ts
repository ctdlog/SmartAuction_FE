import api from '@/services/api'

export const signature = (auctionId: number, signMsg: string, password: string) => {
  return api.post(`/wallets/sign`, { auctionId, signMsg, password })
}
