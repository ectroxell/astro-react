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
  const emptyJournal: Journal[] = []
  it('should render header journals for signed in user with journal entries', () => {
    const { getByText } = render(
      <JournalPage userName={name} journals={journals} />
    )

    expect(getByText(`${name}'s Moon Journal 🌙`)).toBeInTheDocument()
    expect(getByText(journals[0].text)).toBeInTheDocument()
  })

  it('should render no journals message for signed in users with zerio journal entries', () => {
    const { getByText } = render(
      <JournalPage userName={name} journals={emptyJournal} />
    )

    expect(
      getByText(
        'You do not have any journal entries. Create your first journal entry here!'
      )
    ).toBeInTheDocument()
  })

  it('should render correct message for logged out user', () => {
    const { getByText } = render(
      <JournalPage userName={null} journals={emptyJournal} />
    )

    expect(getByText('Login to create a journal entry.')).toBeInTheDocument()
  })
})
