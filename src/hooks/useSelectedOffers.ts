import { useState } from 'react'
import { type Offer } from '../types'
import { useNavigate } from 'react-router-dom'
import { saveOffersToCompare } from '../services/saveOffersToCompare'

export const useSelectedOffers = (offers: Offer[]) => {
  const navigate = useNavigate()

  const [offersSelected, setOffersSelected] = useState<Offer[]>([])

  const updateSelectedOffers = (typeCheck: boolean, id: string) => {
    const newOffer = offers.find((offer) => offer.id === id)
    const offersSelectedAux = offersSelected
    if (typeCheck) {
      offersSelected.push(newOffer as Offer)
    } else {
      offersSelected.splice(offersSelected.indexOf(newOffer as Offer), 1)
    }
    setOffersSelected([...offersSelectedAux])
  }

  const setOffersToCompare = () => {
    saveOffersToCompare(offersSelected)
    navigate('/compare-offers')
  }

  return { offersSelectedLength: offersSelected.length, updateSelectedOffers, setOffersToCompare }
}
