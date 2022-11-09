import { FunctionComponent } from "react";
import { Journal } from "../../domain/types/Journal";

type JournalProps = {
  journals: Journal[];
  user: Object | null | undefined;
}

export const JournalPage: FunctionComponent<JournalProps> = (props: JournalProps) => {
  console.log({props})
  // if no user is signed in, it should show "must sign in to use journal" message
  if (!props.user) {
    return (
      <>
        <p className="text">Sign in to create a journal entry.</p>
      </>
    );
  };

  // if signed in but no journal entries, show 'no journal entries' message
  if (props.journals.length === 0) {
    return (
      <>
        <p className="text">You do not have any journal entries. Create your first journal entry here!</p>
      </>
    )
  }

  // if the user has any journal entries, they should show up
  if (props.journals.length >= 1) {
    return (
      <>
        {props.journals.map((journal) => {
          return (
           <div>
           <p className="titleText">{journal.moonPhase}</p>
           <p className="text">
             {journal.text}
           </p>
         </div>
          )
        })}
      </>
    )
  }

  console.log('before last return')
  return (
  <>
    <p className="text">hello</p>
  </>
  )
}