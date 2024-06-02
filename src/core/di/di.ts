import { asFunction } from 'awilix'

import { createTypedContainer } from '~/core/di/typed-container'
import { axiosModule } from '~/core/modules'
import { getBitcoinUseCase } from '~/features/home/business/usecases/binance/get-bitcoin'
import { binanceDataSource } from '~/features/home/data/datasources/binance-datasource'
import { binanceRepository } from '~/features/home/data/repositories'

export const inject = createTypedContainer({
  axiosModule: asFunction(axiosModule).singleton(),
  binanceDataSource: asFunction(binanceDataSource),
  binanceRepository: asFunction(binanceRepository),
  getBitcoinUseCase: asFunction(getBitcoinUseCase)
})
