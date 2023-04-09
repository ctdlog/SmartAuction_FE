import api from '@/services/api'
import type { Auction, AuctionDetail, AuctionParams } from '@/services/api/auction/types'

export const getAuctions = (page: number, limit: number) => {
  return api.get<{ auctions: Auction[]; total: number }>(`/auctions/${page}/${limit}`)
}

export const createAuction = ({ title, description, initPrice, maxPrice, ipfsUrl, expiredAt }: AuctionParams) => {
  return api.post('/auctions', {
    title,
    description,
    initPrice,
    maxPrice,
    ipfsUrl,
    expiredAt,
  })
}

export const getAuctionDetail = (id: number) => {
  return api.get<AuctionDetail>(`/auctions/${id}`)
}

export const bidAuction = (auctionId: number, password: string, bidAmount: number) => {
  return api.post(`/auctions/bid`, { auctionId, password, bidAmount })
}
