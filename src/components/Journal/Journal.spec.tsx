import { render } from '@testing-library/react'
import { Journal } from '../../domain/types/Journal'
import { JournalPage } from './Journal'

describe('JournalPage', () => {
  const name: string = 'Albert'
  const journals: Journal[] = [
    {
      text: 'this is my journal',
      date: new Date(),
      moonPhase: 'full',
      id: '1',
      userId: '12',
    },
  ]
  it('should render header', () => {
    const { getByText } = render(<JournalPage userName={name} journals={journals}/>)

    expect(getByText(`${name}'s Moon Journal 🌙`)).toBeInTheDocument()
  })
})
