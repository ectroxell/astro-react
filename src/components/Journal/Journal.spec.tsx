import { fireEvent, render } from '@testing-library/react'
import { Journal } from '../../domain/types/Journal'
import { JournalPage } from './Journal'

describe('JournalPage', () => {
  const user = {displayName: 'Albert'}
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
  const mockUpdateJournals = jest.fn()

  it('should render header journals for signed in user with journal entries', () => {
    const { getByText } = render(
      <JournalPage user={user} journals={journals} currentMoonPhase={'full moon'} updateJournals={mockUpdateJournals} />
    )

    expect(getByText(`${user.displayName}'s Moon Journal 🌙`)).toBeInTheDocument()
    expect(getByText(journals[0].text)).toBeInTheDocument()
  })

  it('should render no journals message for signed in users with zerio journal entries', () => {
    const { getByText } = render(
      <JournalPage user={user} journals={emptyJournal} currentMoonPhase={'full moon'} updateJournals={mockUpdateJournals} />
    )

    expect(
      getByText(
        'You do not have any journal entries. Create your first journal entry here!'
      )
    ).toBeInTheDocument()
  })

  it('should render correct message for logged out user', () => {
    const { getByText } = render(
      <JournalPage user={null} journals={emptyJournal} currentMoonPhase={'full moon'} updateJournals={mockUpdateJournals} />
    )

    expect(getByText('Login to create a journal entry.')).toBeInTheDocument()
  })

  it('should open modal when create new entry button is clicked and close when X button is clicked', () => {
    const { getByText, getByRole } = render(
      <JournalPage user={user} journals={journals} currentMoonPhase={'full moon'} updateJournals={mockUpdateJournals} />
    )

    expect(getByText('New Journal Entry')).not.toBeVisible()
    
    const newEntryButton = getByRole('button', {name: 'New Entry'})
    fireEvent.click(newEntryButton)

    expect(getByText('New Journal Entry')).toBeVisible()

    const closeButton = getByText('+')
    fireEvent.click(closeButton)

    expect(getByText('New Journal Entry')).not.toBeVisible()
  })
})
