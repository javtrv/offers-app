import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import '../styles/App.css'
import '../styles/_main.scss'
import OffersList from '../components/OffersList'
import QuantityFilter from '../components/QuantityFilter'
import { useOffers } from '../hooks/useOffers'

interface AppProps {
  type: string
}

const App = ({ type }: AppProps) => {
  window.sessionStorage.setItem('userId', 'e88b0e82-24ab-4f0c-9e46-8f0be16a3d36')
  const { offers, quantityChange } = useOffers(type)

  const handleQuantityChange = (quantity: number) => {
    quantityChange(quantity)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h5>{type === 'home' ? 'The best offers for you' : 'Your personal favorites!'}</h5>
        </Col>
      </Row>
      {offers.length === 0
        ? (
          <Spinner animation="border" variant="primary" />
          )
        : (
          <Row>
            <Col xs={12} className='mb-4'>
              <h3>{type === 'home' ? 'Offer List' : 'Favorites offers List'}</h3>
              <QuantityFilter handleQuantityChange={handleQuantityChange} />
            </Col>
            <Col className='p-0'>
              <OffersList compare offers={offers} />
            </Col>
          </Row>
          )}

    </Container>
  )
}

export default App
