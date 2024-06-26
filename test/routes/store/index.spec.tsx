import { fireEvent, render, screen } from '@solidjs/testing-library'

import Store from '~/routes/store/index'

describe('store', () => {
  const mocks = vi.hoisted(() => ({
    mockNavigate: vi.fn(),
    mockSetData: vi.fn(),
    mockSetText: vi.fn(),
    mockTest: vi.fn().mockReturnValue('test')
  }))

  vi.mock('~/features/common/ui/components', () => ({
    State: () => <div>State Component</div>
  }))

  vi.mock('~/features/common/ui/hooks', () => ({
    useTheme: () => ({ control: 'mock-control' })
  }))

  vi.mock('@solidjs/router', () => ({ useNavigate: () => mocks.mockNavigate }))

  vi.mock('solid-js', async () => ({
    ...(await vi.importActual('solid-js')),
    createSignal: () => [mocks.mockTest, mocks.mockSetText],
    useContext: () => ({ setData: mocks.mockSetData })
  }))

  it('should render correctly', () => {
    expect.assertions(2)

    render(() => <Store />)

    expect(
      screen.getByText(/write anything in this form and send!/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/go to home/i)).toBeInTheDocument()
  })

  it('should update text state on input change', () => {
    expect.assertions(2)

    render(() => <Store />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'test' } })
    fireEvent.change(input, { target: { value: 'test' } })

    expect(mocks.mockSetText).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue('test')
  })

  it('should call setData with input text on button click', () => {
    expect.assertions(1)

    render(() => <Store />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'test' } })

    fireEvent.click(screen.getByTestId('send-button'))

    expect(mocks.mockSetData).toHaveBeenCalledWith('test')
  })

  it('should navigate to home on button click', () => {
    expect.assertions(1)

    render(() => <Store />)

    fireEvent.click(screen.getByTestId('go-home-button'))

    expect(mocks.mockNavigate).toHaveBeenCalledWith('/')
  })
})
