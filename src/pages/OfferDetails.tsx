import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Details from '../components/Details'
import StarIcon from '../components/icons/StarIcon'
import TrashIcon from '../components/icons/TrashIcon'
import { useFavoriteOffers } from '../hooks/useFavoriteOffers'

const OfferDetails = () => {
  const { id } = useParams()
  const offerId = String(id)
  const { offer, isFavorite, addOfferToFavorites, removeOfferFromFavorites } = useFavoriteOffers(offerId)

  const handleClickAddToFav = () => {
    addOfferToFavorites()
  }

  const handleClickRemoveFromFav = () => {
    removeOfferFromFavorites()
  }

  return (
    <>
    <Container>
      <Row>
        <Col>
          <h3>Offer Details</h3>
        </Col>
      </Row>
      {offer
        ? (<>
        <Row>
        <Col>
          <Details offer={offer} />
        </Col>
      </Row>
      <Row>
        <Col>
        {!isFavorite
          ? (
            <Button variant="primary" onClick={handleClickAddToFav}>
              <StarIcon />
              Add to favorites
            </Button>
            )
          : (
            <Button variant="primary" onClick={handleClickRemoveFromFav}>
              <TrashIcon/>
              Remove from favorites
            </Button>
            )
          }

        </Col>
      </Row>
      </>)
        : (
        <Spinner animation="border" variant="primary" />
          )}

    </Container>
    </>
  )
}

export default OfferDetails
