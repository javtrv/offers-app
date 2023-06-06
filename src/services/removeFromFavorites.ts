import axios from 'axios'
import { API } from '../API'

export const removeFromFavorites = async (offerId: string, userId: string) => {
  const url = `${API.url}/users/${userId}/favoriteOffer/${offerId}`
  return await axios.delete(url).then((res) => {
    return res.data.data
  }).catch(() => {
    return undefined
  })
}
