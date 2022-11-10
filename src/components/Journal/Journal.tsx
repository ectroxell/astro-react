import { FunctionComponent } from 'react'
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

export const JournalPage: FunctionComponent<JournalProps> = (
  props: JournalProps
) => {
  // if no user is signed in, it should show "must sign in to use journal" message
  if (!props.userName) {
    return (
      <div className="textContainer">
        <p className="text">Login to create a journal entry.</p>
      </div>
    )
  }

  // if signed in but no journal entries, show 'no journal entries' message
  if (!props.journals.length) {
    return (
      <div className="journalsContainer">
        <p className="text">
          You do not have any journal entries. Create your first journal entry
          here!
        </p>
      </div>
    )
  }

  // if the user has any journal entries, they should be displayed
  if (props.journals.length) {
    return (
      <div className="journalPageContainer">
        <div className="titleText journalHeader">
          {props.userName}'s Moon Journal 🌙
        </div>
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
      </div>
    )
  }

  return (
    <>
      <p className="text">hello</p>
    </>
  )
}
