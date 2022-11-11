import { FunctionComponent, useState } from 'react'
import { Journal } from '../../domain/types/Journal'
import './journal.scss'

type JournalProps = {
  journals: Journal[]
  userName: string | null
}

type JournalEntryProps = {
  moonPhase: string
  date: string
  text: string
}

type NewJournalModalProps = {
  isModalOpen: boolean
  closeModal: () => void
}

const JournalEntry: FunctionComponent<JournalEntryProps> = (
  props: JournalEntryProps
) => {
  return (
    <div className="journalEntry">
      <p className="titleText journalTitle">
        {props.date}: {props.moonPhase}
      </p>
      <p className="text">{props.text}</p>
    </div>
  )
}

const NewJournalModal: FunctionComponent<NewJournalModalProps> = (
  props: NewJournalModalProps
) => {
  return (
    <div
      className="bgModal"
      style={{ visibility: props.isModalOpen ? 'visible' : 'hidden' }}
    >
      <div className="modalContent">
        <div className="close" onClick={props.closeModal}>+</div>
        <div className="titleText">New Journal Entry</div>
        <form>
          <textarea
            name="journalText"
            autoFocus
            placeholder="What's on your mind..."
          />
          <button className="text createJournalButton">Submit</button>
        </form>
      </div>
    </div>
  )
}

export const JournalPage: FunctionComponent<JournalProps> = (
  props: JournalProps
) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // if no user is signed in, it should show "must sign in to use journal" message
  if (!props.userName) {
    return (
      <div className="textContainer">
        <p className="text">Login to create a journal entry.</p>
      </div>
    )
  }

  // if signed in but no journal entries, show 'no journal entries' message
  // if the user has any journal entries, they should be displayed
  return (
    <div className="journalPageContainer">
      <div className="titleText journalHeader">
        <span>{props.userName}'s Moon Journal 🌙</span>
        <button className="text newJournalButton" onClick={() => setIsModalOpen(true)}>
          New Entry
        </button>
      </div>
      <div className="journalsContainer">
        {props.journals.length ? (
          props.journals.map(journal => {
            return (
              <JournalEntry
                key={journal.id}
                date={journal.date.toLocaleString()}
                text={journal.text}
                moonPhase={journal.moonPhase}
              />
            )
          })
        ) : (
          <p className="text">
            You do not have any journal entries. Create your first journal entry
            here!
          </p>
        )}
      </div>
      <NewJournalModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  )
}
