// @refresh reload
import { mount, StartClient } from '@solidjs/start/client'

// eslint-disable-next-line toplevel/no-toplevel-side-effect, @typescript-eslint/no-non-null-assertion
mount(() => <StartClient />, document.querySelector('#app')!)
