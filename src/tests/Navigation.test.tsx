import Navigation from '../components/Navigation'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('Navigation', () => {
  beforeEach(() => {
    render(
      <MemoryRouter
        initialEntries={
          ['/',
            '/favorites',
            '/offer-details/:id',
            '/compare-offers'
          ]}
      >
        <Navigation />
      </MemoryRouter>
    )
  })

  test('should render a Offers link', () => {
    expect(screen.getByText('All offers')).toBeDefined()
  })

  test('should render a Favorites link', () => {
    expect(screen.getByText('Favorite Offers')).toBeDefined()
  })
})
