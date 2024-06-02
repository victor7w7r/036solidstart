import { AxiosRequestHeaders } from 'axios'
import { mock } from 'vitest-mock-extended'

import { errorBinance } from '~/features/home/business/models'
import { BinanceDataSource } from '~/features/home/data/datasources'
import { binanceRepository } from '~/features/home/data/repositories/binance-repository'

describe('binanceRepository', () => {
  const binanceDataSource = mock<BinanceDataSource>()

  const { getBitcoin } = binanceRepository({ binanceDataSource })

  const mockResponse = {
    config: {
      headers: {} as AxiosRequestHeaders
    },
    data: [errorBinance()],
    headers: {},
    status: 200,
    statusText: 'OK'
  }

  it('should return BTCUSDT', async () => {
    expect.assertions(1)

    binanceDataSource.getBitcoin.mockResolvedValue(mockResponse)

    const result = await getBitcoin()

    expect(result.symbol).toBe('ERR')
  })

  it('should return errorBinance', async () => {
    expect.assertions(1)

    binanceDataSource.getBitcoin.mockRejectedValue(new Error('Failed'))

    const result = await getBitcoin()

    expect(result).toStrictEqual(errorBinance())
  })
})
