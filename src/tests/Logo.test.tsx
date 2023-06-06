import Logo from '../components/Logo'
import { render, screen } from '@testing-library/react'

describe('Logo', () => {
  test('should render', () => {
    render(<Logo />)
    expect(screen.getByTestId('test-logo')).toBeDefined()
  })
})
