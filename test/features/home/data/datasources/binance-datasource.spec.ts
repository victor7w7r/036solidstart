import type { AxiosInstance } from 'axios'
import { mock } from 'vitest-mock-extended'

import { timeout } from '~/core/modules'
import { errorBinance } from '~/features/home/business/models'
import {
  BinanceDataSource,
  binanceDataSource
} from '~/features/home/data/datasources'

describe('binanceDataSource', () => {
  let axiosInstance: ReturnType<typeof mock<AxiosInstance>>
  let dataSource: BinanceDataSource

  beforeEach(() => {
    axiosInstance = mock<AxiosInstance>()
    dataSource = binanceDataSource({ axiosModule: { client: axiosInstance } })
  })

  it('getBitcoin returns data from Binance API', async () => {
    expect.assertions(2)

    const responseData = [errorBinance()]

    axiosInstance.get.mockResolvedValueOnce({ data: responseData })

    const response = await dataSource.getBitcoin()

    expect(axiosInstance.get).toHaveBeenCalledWith('/v3/ticker/24hr', {
      timeout
    })

    expect(response.data).toStrictEqual(responseData)
  })
})
