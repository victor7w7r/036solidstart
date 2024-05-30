import type { Binance, UseCase } from '~/features/home/business/models'
import type { BinanceRepository } from '~/features/home/business/repositories'

export const getBitcoinUseCase = ({
  binanceRepository
}: Readonly<{
  binanceRepository: BinanceRepository
}>): UseCase<Binance> => ({
  exec: binanceRepository.getBitcoin
})
