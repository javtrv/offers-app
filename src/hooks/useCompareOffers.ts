import { type Offer } from '../types'
import { sortOffers } from '../helpers'
import { useState, useEffect } from 'react'
import { getOffersToCompare } from '../services/getOffersToCompare'

export const useCompareOffers = () => {
  const [sortedOffers, setSortedOffers] = useState<Offer[]>([])
  const [bestOffer, setBestOffer] = useState<Offer[]>([])

  useEffect(() => {
    const offersToCompare = getOffersToCompare()
    const [bestOfferAux, ...sortedOffersAux] = sortOffers(offersToCompare)
    setSortedOffers(sortedOffersAux)
    setBestOffer([bestOfferAux])
  }, [])

  return { sortedOffers, bestOffer }
}
