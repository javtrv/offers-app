import { type Offer } from './types'

export const sortOffers = (offers: Offer[]) => {
  return offers.sort((a, b) => {
    if (a.amount === b.amount) {
      if (a.interestRate === b.interestRate) {
        return b.term - a.term
      }
      return a.interestRate - b.interestRate
    }
    return b.amount - a.amount
  })
}
