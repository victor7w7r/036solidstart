import '~/features/home/ui/styles/home.css'

import { useNavigate } from '@solidjs/router'

import { State } from '~/features/common/ui/components'
import { useTheme } from '~/features/common/ui/hooks'
import { Call } from '~/features/home/ui/components'

export default function Home() {
  const {
    changeBlue,
    changeEmerald,
    changePurple,
    changeRed,
    control,
    isDark
  } = useTheme()

  const navigate = useNavigate()

  return (
    <div class='flex h-min flex-col justify-center backdrop-blur-xl'>
      <div class='card-flex'>
        <div class={`card-container ${control}`}>
          <p class='adaptable-amina'>Made with love by</p>
          <img
            alt=''
            class='scale-75 lg:scale-100'
            height={200}
            src={`/${isDark() ? 'brandwhite' : 'brand'}.png`}
            width={400}
          />
          <h3 class='adaptable-center-text-base mb-4 font-semibold'>
            Happy Hacking! with Typescript?
          </h3>
          <p class='adaptable-center-text-base mb-8 font-roboto'>
            Roboto Font works with
          </p>
          <img
            alt=''
            class='scale-50 lg:scale-75 tall:scale-75'
            height={200}
            src={`/${isDark() ? 'tailwindwhite' : 'tailwind'}.png`}
            width={400}
          />
        </div>
        <div class={`card-container ${control}`}>
          <State />
          <h3 class='adaptable-center-text-bold'>Lets see bitcoin price</h3>
          <Call />
        </div>
      </div>
      <div class='centered-button-ctn'>
        <button
          class='standard-button'
          onClick={() => navigate('/store')}
          type='button'
        >
          Go to store
        </button>
      </div>
      <div class='mx-auto -mt-1 flex w-fit flex-row gap-7'>
        <button class='blue-button' onClick={changeBlue} type='button' />
        <button class='purple-button' onClick={changePurple} type='button' />
        <button class='red-button' onClick={changeRed} type='button' />
        <button class='emerald-button' onClick={changeEmerald} type='button' />
      </div>
    </div>
  )
}
