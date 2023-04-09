export type AuctionStatus = 1 | 2 | 3 | 4 | 5

export interface Auction {
  id: number
  title: string
  description: string // <div>IPHONE 파는데요 ~~<img src='www.navsv.com' /><div>
  writer: number
  status: AuctionStatus
  initPrice: number
  maxPrice: number
  contract: string // 0xD9168068DeABD93cbfdf1471a988029b627Ac3be
  ipfsUrl: string // ipfs://naskjldnaksjddfndksjfnkf
  createdAt: string
  expiredAt: string
}

export interface AuctionDetail {
  title: string
  description: string
  writerEoa: string
  writerEmail: string
  status: 1
  initPrice: number
  maxPrice: number
  ipfsUrl: string
  contract: string
  createdAt: string
  expiredAt: string
}

export interface AuctionParams {
  title: string
  description: string
  initPrice: number
  maxPrice: number
  ipfsUrl: string
  expiredAt: string
}

export interface Bidder {
  bidder: string
  price: number
  biddedAt: string
}
