import { FunctionComponent } from 'react'
import { Journal } from '../../domain/types/Journal'

type JournalProps = {
  journals: Journal[]
  user: Object | null | undefined
}

type JournalEntryProps = {
  moonPhase: string
  date: string
  text: string
  key: string;
}

const JournalEntry: FunctionComponent<JournalEntryProps> = (
  props: JournalEntryProps
) => {
  return (
    <div key={props.key}>
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
      <>
        {props.journals.map(journal => {
          return (
            <div>
              <JournalEntry
                date={journal.date.toLocaleString()}
                text={journal.text}
                moonPhase={journal.moonPhase}
                key={journal.id}
              />
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      <p className="text">hello</p>
    </>
  )
}
