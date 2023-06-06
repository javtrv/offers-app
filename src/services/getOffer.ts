import axios from 'axios'
import { API } from '../API'

export const getOffer = async (offerId: string) => {
  const offerUrl = `${API.url}/offers/${offerId}`
  return await axios.get(offerUrl).then((res) => {
    return res.data.data
  }).catch(() => {
    return undefined
  })
}
