import { createQuery } from '@tanstack/solid-query'
import { Match, Switch } from 'solid-js'

import { inject } from '~/core/di'
import { Spinner } from '~/features/home/ui/components'

export const Call = () => {
  const getBitcoinUseCase = inject.resolve('getBitcoinUseCase')

  const query = createQuery(() => ({
    queryFn: getBitcoinUseCase.exec,
    queryKey: ['getBitcoin']
  }))

  return (
    <Switch>
      <Match when={query.isPending}>
        <Spinner />
      </Match>
      <Match when={query.isError}>
        <p>Error</p>
      </Match>
      <Match when={query.isSuccess}>
        <>
          <p class='adaptable-call'>
            Symbol:
            {query.data?.symbol}
          </p>
          <p class='adaptable-call'>
            Price:
            {query.data?.askPrice}
          </p>
        </>
      </Match>
    </Switch>
  )
}
