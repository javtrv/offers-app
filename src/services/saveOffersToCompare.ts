import { type Offer } from '../types'

export const saveOffersToCompare = (offers: Offer[]) => {
  window.sessionStorage.setItem('offersToCompare', JSON.stringify(offers))
}
