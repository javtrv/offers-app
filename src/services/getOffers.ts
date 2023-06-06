import axios from 'axios'
import { API } from '../API'

export const getOffers = async (type: string, userId: string, quantity: number) => {
  let url = ''
  if (type === 'home') {
    url = `${API.url}/offers/quantity/${quantity}`
  } else {
    url = `${API.url}/users/${userId}/favoriteOffers/${quantity}`
  }

  return await axios.get(url).then((res) => {
    return res.data.data
  }).catch((err) => {
    console.log(err)
  })
}
