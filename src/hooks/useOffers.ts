import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { type Offer } from '../types'
import { getOffers } from '../services/getOffers'

export const useOffers = (type: string) => {
  const location = useLocation()
  const userId = window.sessionStorage.getItem('userId') as string
  const quantityRef = useRef<number>(10)

  const [offers, setOffers] = useState<Offer[]>([])

  const refreshOffers = (quantity: number = 10) => {
    getOffers(type, userId, quantity).then((offers) => {
      setOffers(offers)
    }).catch((err) => {
      console.log(err)
    }
    )
  }

  const quantityChange = (quantity: number) => {
    if (quantityRef.current <= quantity) {
      refreshOffers(quantity)
    } else {
      const offersAux = offers
      const filterOffers = offersAux.splice(0, quantity)
      setOffers(filterOffers)
    }
    quantityRef.current = quantity
  }

  useEffect(() => {
    refreshOffers()
  }, [location])

  return { offers, quantityChange }
}
