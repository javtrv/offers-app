import QuantityFilter from '../components/QuantityFilter'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

describe('QuantityFilter', () => {
  test('renders QuantityFilter component', () => {
    render(<QuantityFilter handleQuantityChange={() => {}} />)
    const quantityLabel = screen.getByText('Quantity')
    const quantitySelect = screen.getByLabelText('Quantity Select')
    expect(quantityLabel).toBeDefined()
    expect(quantitySelect).toBeDefined()
  })

  test('should call handleQuantityChange on select change', () => {
    const mockHandleQuantityChange = vi.fn()
    render(<QuantityFilter handleQuantityChange={mockHandleQuantityChange} />)
    const quantitySelect = screen.getByLabelText('Quantity Select')
    fireEvent.change(quantitySelect, { target: { value: '25' } })
    expect(mockHandleQuantityChange).toHaveBeenCalledWith(25)
  })
})
