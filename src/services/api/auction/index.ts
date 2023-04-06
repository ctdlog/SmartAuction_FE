import api from '@/services/api'
import type { Auction } from '@/services/api/auction/types'

export const getAuctions = (page: number, limit: number) => {
  return api.get<{ auctions: Auction[]; total: number }>(`/auctions/${page}/${limit}`)
}
