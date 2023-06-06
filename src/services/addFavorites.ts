import axios from 'axios'
import { API } from '../API'

export const addToFavorites = async (offerId: string, userId: string) => {
  const url = `${API.url}/users/${userId}/favoriteOffer/${offerId}`
  return await axios.post(url).then((res) => {
    return res.data.data
  }).catch(() => {
    return undefined
  })
}
