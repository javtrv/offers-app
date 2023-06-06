import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import OffersList from '../components/OffersList'
import { useCompareOffers } from '../hooks/useCompareOffers'

const CompareOffers = () => {
  // Aqui tomamos la lista de ofertas del sesion storage
  // Debemos usar la funcion de bestOffer para saber cual es la mejor oferta
  // Debemos mostrar la mejor oferta en la parte superior
  // Debemos mostrar la lista de ofertas en la parte inferior

  const { sortedOffers, bestOffer } = useCompareOffers()

  return (
    <Container>
      <Row>
        <Col>
          <h3>Compare offers</h3>
        </Col>
      </Row>
      {sortedOffers.length > 0
        ? (
        <>
          <Row>
            <Col xs={12}>
              <h4>Best Offer</h4>
            </Col>
            <Col xs={12}>
              <p>
                The best offer is selected based on the amount, interest rate and term of the loan.
              </p>
            </Col>
            <Col xs={12}>
              <OffersList compare={false} offers={bestOffer} />
            </Col>

          </Row>
          <Row>
            <Col xs={12}>
              <h4>Other Offers</h4>
            </Col>
            <Col xs={12}>
              <p>
                The other offers are sorted by the amount, interest rate and term of the loan.
              </p>
            </Col>
            <Col>
              <OffersList compare={false} offers={sortedOffers} />
            </Col>
          </Row>
        </>
          )
        : (<Spinner animation="border" variant="primary" />)}
    </Container>
  )
}

export default CompareOffers
