import OffersList from '../components/OffersList'
import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const offerList = [
  {
    id: 'b4e91347-3b34-4fc9-a5cc-ee7b39f71e5b',
    loanType: 'Home Loan',
    amount: 250000,
    interestRate: 4.2,
    term: 360,
    provider: 'Bank B'
  },
  {
    id: 'bbf078eb-8f3d-4e2a-b64f-d95e17a6f94f',
    loanType: 'Home Loan',
    amount: 250000,
    interestRate: 4.2,
    term: 360,
    provider: 'Bank B'
  }
]

describe('OffersList', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <MemoryRouter
        initialEntries={
          ['/'
          ]}
      >
        <OffersList offers={offerList} compare />
      </MemoryRouter>
      )
    })
  })

  test('renders OffersList component', () => {
    const table = screen.getByTestId('offer-table-test')
    expect(table).toBeDefined()
  })

  test('should show offers selectec message if compare is true', () => {
    const message = screen.queryByText(/selected/i)
    expect(message).toBeDefined()
  })

  test('should show compare button 2 offers are checked', () => {
    let checkbox = screen.getByTestId('check-b4e91347-3b34-4fc9-a5cc-ee7b39f71e5b-test')
    checkbox.click()
    checkbox = screen.getByTestId('check-bbf078eb-8f3d-4e2a-b64f-d95e17a6f94f-test')
    checkbox.click()
    const button = screen.getByTestId('btn-compare-test')
    expect(button).toBeDefined()
  })
})
