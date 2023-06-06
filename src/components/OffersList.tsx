import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import EyeIcon from './icons/EyeIcon'
import ScaleIcon from './icons/ScaleIcon'
import { type Offer } from '../types'
import { useSelectedOffers } from '../hooks/useSelectedOffers'

interface OffersListProps {
  compare: boolean
  offers?: Offer[]
}

const OffersList = ({ compare, offers }: OffersListProps) => {
  if (!offers || offers.length === 0) {
    return null
  }

  const navigate = useNavigate()
  const { offersSelectedLength, updateSelectedOffers, setOffersToCompare } = useSelectedOffers(offers)

  const handleSelectOffer = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    updateSelectedOffers(e.target.checked, id)
  }

  const handleClickDetails = (id: string) => {
    console.log(id)
    navigate(`/offer-details/${id}`)
  }

  const handleClickCompare = () => {
    setOffersToCompare()
  }

  return (
    <Container>
      <Table striped bordered hover responsive data-testid='offer-table-test'>
        <thead>
          <tr>
            <th></th>
            <th>LoanType</th>
            <th>Amount</th>
            <th>Interest Rate</th>
            <th>Term</th>
            <th>Provider</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={offer.id}>
              { compare
                ? (
                  <td>
                  <Form.Check data-testid={`check-${offer.id}-test`} onChange={(e) => { handleSelectOffer(e, offer.id) }} type='checkbox' aria-label={`offer-${index}`} />
                </td>
                  )
                : <td></td>}
              <td>{offer.loanType}</td>
              <td>{offer.amount}</td>
              <td>{offer.interestRate}</td>
              <td>{offer.term}</td>
              <td>{offer.provider}</td>
              <td onClick={() => {
                handleClickDetails(offer.id)
              }}>
                <EyeIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {compare
        ? (
            <p>
              {offersSelectedLength} offers selected
            </p>
          )
        : null}
      {offersSelectedLength > 1
        ? (
        <Row>
        <Col>
          <Button onClick={handleClickCompare} data-testid='btn-compare-test'>
            <ScaleIcon/>
            {' '}Compare selected offers
          </Button>
        </Col>
      </Row>
          )
        : null}
    </Container>

  )
}

export default OffersList
