import { render } from '@testing-library/react'
import { Home } from './Home'

describe('Home', () => {
  it('should render', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Welcome to Moonology')).toBeInTheDocument()
  })
})
