import { asFunction } from 'awilix'

import { getBitcoinUseCase } from '~/features/home/business/usecases/binance/get-bitcoin'
import { binanceDataSource } from '~/features/home/data/datasources/binance-datasource'
import { binanceRepository } from '~/features/home/data/repositories'
import { createTypedContainer } from '~/core/config/typed-container'
import { axiosModule } from '~/core/modules'

export const inject = createTypedContainer({
  axiosModule: asFunction(axiosModule).singleton(),
  binanceDataSource: asFunction(binanceDataSource),
  binanceRepository: asFunction(binanceRepository),
  getBitcoinUseCase: asFunction(getBitcoinUseCase)
})
