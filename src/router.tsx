import App from './pages/App'
import { createBrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import OfferDetails from './pages/OfferDetails'
import CompareOffers from './pages/CompareOffers'

export const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: '/',
        element: <App type='home'/>
      },
      {
        path: '/favorites',
        element: <App type='favs'/>
      },
      {
        path: '/offer-details/:id',
        element: <OfferDetails />
      },
      {
        path: '/compare-offers',
        element: <CompareOffers/>
      }
    ]
  }

])
