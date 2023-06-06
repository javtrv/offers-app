export const getOffersToCompare = () => {
  const stringOffers = window.sessionStorage.getItem('offersToCompare')
  const offersToCompare = JSON.parse(stringOffers as string)
  return offersToCompare
}
