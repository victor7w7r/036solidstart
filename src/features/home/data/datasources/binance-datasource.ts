import type { AxiosResponse } from 'axios'

import type { Binance } from '~/features/home/business/models'
import { type AxiosModule, timeout } from '~/core/modules'

export type BinanceDataSource = Readonly<{
  getBitcoin: () => Promise<AxiosResponse<Binance[]>>
}>

export const binanceDataSource = ({
  axiosModule
}: Readonly<{
  axiosModule: AxiosModule
}>): BinanceDataSource => {
  const route = '/v3/ticker/24hr'

  const getBitcoin = () =>
    axiosModule.client.get<Binance[]>(route, {
      timeout
    })

  return { getBitcoin }
}
