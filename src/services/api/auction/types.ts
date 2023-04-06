export interface Auction {
  id: number
  title: string
  description: string // <div>IPHONE 파는데요 ~~<img src='www.navsv.com' /><div>
  writer: number
  status: number
  initPrice: number
  maxPrice: number
  contract: string // 0xD9168068DeABD93cbfdf1471a988029b627Ac3be
  ipfsUrl: string // ipfs://naskjldnaksjddfndksjfnkf
  createdAt: string
  expiredAt: string
}
