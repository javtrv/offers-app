import { type Offer } from '../types'

interface DetailsProps {
  offer: Offer
}
const Details = ({ offer }: DetailsProps) => {
  return (
    <ul>
      <li><b>Loan Type:</b> {offer.loanType}</li>
      <li><b>Amount:</b> {offer.amount}</li>
      <li><b>Interest Rate:</b> {offer.interestRate}</li>
      <li><b>Term:</b> {offer.term}</li>
      <li><b>Provider:</b> {offer.provider}</li>
      {offer.details && <li><b>Details:</b> {offer.details}</li>}
    </ul>
  )
}

export default Details
