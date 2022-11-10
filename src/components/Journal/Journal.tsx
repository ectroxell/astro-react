import { FunctionComponent } from 'react'
import { Journal } from '../../domain/types/Journal'
import './journal.scss'

type JournalProps = {
  journals: Journal[]
  user: Object | null | undefined
}

type JournalEntryProps = {
  moonPhase: string
  date: string
  text: string
}

const JournalEntry: FunctionComponent<JournalEntryProps> = (
  props: JournalEntryProps
) => {
  return (
    <div className="journalEntry">
      <p className="titleText">
        {props.date}: {props.moonPhase}
      </p>
      <p className="text">{props.text}</p>
    </div>
  )
}

export const JournalPage: FunctionComponent<JournalProps> = (
  props: JournalProps
) => {
  // if no user is signed in, it should show "must sign in to use journal" message
  if (!props.user) {
    return (
      <>
        <p className="text">Sign in to create a journal entry.</p>
      </>
    )
  }

  // if signed in but no journal entries, show 'no journal entries' message
  if (!props.journals.length) {
    return (
      <>
        <p className="text">
          You do not have any journal entries. Create your first journal entry
          here!
        </p>
      </>
    )
  }

  // if the user has any journal entries, they should be displayed
  if (props.journals.length) {
    return (
      <div className="journalsContainer">
        {props.journals.map(journal => {
          return (
            <JournalEntry
              key={journal.id}
              date={journal.date.toLocaleString()}
              text={journal.text}
              moonPhase={journal.moonPhase}
            />
          )
        })}
      </div>
    )
  }

  return (
    <>
      <p className="text">hello</p>
    </>
  )
}
