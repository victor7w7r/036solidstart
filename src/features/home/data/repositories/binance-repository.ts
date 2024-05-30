import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { getOrElse, map, tryCatch } from 'fp-ts/lib/TaskEither'

import { errorBinance } from '~/features/home/business/models'
import type { BinanceRepository } from '~/features/home/business/repositories'
import type { BinanceDataSource } from '~/features/home/data/datasources'

export const binanceRepository = ({
  binanceDataSource
}: Readonly<{
  binanceDataSource: BinanceDataSource
}>): BinanceRepository => {
  const getBitcoin = async () =>
    pipe(
      tryCatch(binanceDataSource.getBitcoin, e => e),
      map(
        res =>
          res.data.find(curr => curr.symbol === 'BTCUSDT') ?? errorBinance()
      ),
      getOrElse(() => of(errorBinance()))
    )()

  return { getBitcoin }
}
