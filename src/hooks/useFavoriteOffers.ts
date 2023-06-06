import { useState, useEffect } from 'react'
import { type Offer } from '../types'
import { useNavigate } from 'react-router-dom'
import { getIsFavorite } from '../services/getIsFavorite'
import { getOffer } from '../services/getOffer'
import { addToFavorites } from '../services/addFavorites'
import { removeFromFavorites } from '../services/removeFromFavorites'

export const useFavoriteOffers = (offerId: string) => {
  const navigate = useNavigate()
  const userId = window.sessionStorage.getItem('userId') as string

  const [offer, setOffer] = useState<Offer>()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    getIsFavorite(offerId, userId).then((res) => {
      setIsFavorite(res)
      getOffer(offerId).then((res) => {
        setOffer(res)
      }).catch(() => {
        navigate('/')
      })
    }).catch(() => {
      navigate('/')
    })
  }, [])

  const addOfferToFavorites = () => {
    addToFavorites(offerId, userId).then(() => {
      setIsFavorite(true)
    }).catch(() => {
      navigate('/')
    })
  }

  const removeOfferFromFavorites = () => {
    removeFromFavorites(offerId, userId).then(() => {
      setIsFavorite(false)
    }).catch(() => {
      navigate('/')
    })
  }

  return { offer, isFavorite, addOfferToFavorites, removeOfferFromFavorites }
}
