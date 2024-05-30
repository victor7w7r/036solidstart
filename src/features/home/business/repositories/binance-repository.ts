import type { Binance } from '~/features/home/business/models'

export type BinanceRepository = Readonly<{
  getBitcoin: () => Promise<Binance>
}>
