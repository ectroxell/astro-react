import { render } from '@testing-library/react'
import { Home } from './Home'

describe('Home', () => {
  it('should render', async () => {
    const { findByText } = render(<Home />)

    expect(await findByText('Welcome to Moonology')).toBeInTheDocument()
  })
})
