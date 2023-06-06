import Details from '../components/Details'
import { render, screen } from '@testing-library/react'

const offer = {
  id: 'b4e91347-3b34-4fc9-a5cc-ee7b39f71e5b',
  loanType: 'Home Loan',
  amount: 250000,
  interestRate: 4.2,
  term: 360,
  provider: 'Bank B',
  details: 'Looking to buy a new home? Bank B offers a home loan of $250000 with a low interest rate of 4.2%. Contact us for more details.'
}

const offerWithoutDetails = {
  id: 'b4e91347-3b34-4fc9-a5cc-ee7b39f71e5b',
  loanType: 'Home Loan',
  amount: 250000,
  interestRate: 4.2,
  term: 360,
  provider: 'Bank B'
}

describe('Details', () => {
  test('should render a Loan Type', () => {
    render(<Details offer={offer} />)
    expect(screen.getByText('Loan Type:')).toBeDefined()
  })

  test('should not render Details if not present', () => {
    render(<Details offer={offerWithoutDetails} />)
    expect(screen.queryByText(/details:/i)).toBeNull()
  })
})
