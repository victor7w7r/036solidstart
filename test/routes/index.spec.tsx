import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library'

import { useTheme } from '~/features/common/ui/hooks'
import Home from '~/routes/index'

describe('home', () => {
  const mocks = vi.hoisted(() => ({
    isDark: vi.fn(() => false),
    mockChangeBlue: vi.fn(),
    mockChangeEmerald: vi.fn(),
    mockChangePurple: vi.fn(),
    mockChangeRed: vi.fn(),
    mockControl: 'mock-control',
    mockNavigate: vi.fn()
  }))

  vi.mock('~/features/common/ui/hooks', () => ({
    useTheme: () => ({
      changeBlue: mocks.mockChangeBlue,
      changeEmerald: mocks.mockChangeEmerald,
      changePurple: mocks.mockChangePurple,
      changeRed: mocks.mockChangeRed,
      control: mocks.mockControl,
      isDark: mocks.isDark
    })
  }))

  vi.mock('@solidjs/router', () => ({
    useNavigate: () => mocks.mockNavigate
  }))

  vi.mock('~/features/common/ui/components', () => ({
    State: () => <div>State Component</div>
  }))

  vi.mock('@/home/ui/components', () => ({
    Call: () => <div>Call Component</div>
  }))

  it('should render correctly', () => {
    expect.assertions(8)

    render(() => <Home />)

    expect(screen.getByText(/made with love by/i)).toBeInTheDocument()
    expect(
      screen.getByText(/happy hacking! with typescript?/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/roboto font works with/i)).toBeInTheDocument()
    expect(screen.getByText(/lets see bitcoin price/i)).toBeInTheDocument()
    expect(screen.getByTestId('brand')).toBeInTheDocument()
    expect(screen.getByTestId('tailwind')).toBeInTheDocument()

    cleanup()

    mocks.isDark.mockReturnValue(true)

    render(() => <Home />)

    expect(screen.getByTestId('brand')).toBeInTheDocument()
    expect(screen.getByTestId('tailwind')).toBeInTheDocument()
  })

  it('should navigate to store on button click', () => {
    expect.assertions(1)

    render(() => <Home />)

    fireEvent.click(screen.getByText(/go to store/i))

    expect(mocks.mockNavigate).toHaveBeenCalledWith('/store')
  })

  it('should change theme color on button clicks', () => {
    expect.assertions(4)

    const { changeBlue, changeEmerald, changePurple, changeRed } = useTheme()

    render(() => <Home />)

    fireEvent.click(screen.getByLabelText(/blue-button/i))

    fireEvent.click(screen.getByLabelText(/purple-button/i))

    fireEvent.click(screen.getByLabelText(/red-button/i))

    fireEvent.click(screen.getByLabelText(/emerald-button/i))

    expect(changePurple).toHaveBeenCalled()
    expect(changeBlue).toHaveBeenCalled()
    expect(changeRed).toHaveBeenCalled()
    expect(changeEmerald).toHaveBeenCalled()
  })
})
