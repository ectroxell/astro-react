import { getAuth } from "firebase/auth";
import { FunctionComponent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getJournalsByUserId } from "../../domain/data/journals";
import { Journal } from "../../domain/types/Journal";
import { app } from "../../firebase/firebase";


export const JournalPage: FunctionComponent = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [journals, setJournals] = useState<Journal[]>([]);
  
  const getJournals = async (userId: string) => {
    const journalList: Journal[] = await getJournalsByUserId(userId);
    console.log({journalList})
    setJournals(journalList);
  }
  
  useEffect(() => {
    console.log({user})
    if (user) {
      getJournals(user.uid);
    };
  }, [user]);

  // if no user is signed in, it should show "must sign in to use journal" message
  if (!user) {
    return (
      <>
        <p className="text">Sign in to create a journal entry.</p>
      </>
    );
  };

  // if signed in but no journal entries, show 'no journal entries' message
  if (journals.length === 0) {
    return (
      <>
        <p className="text">You do not have any journal entries. Create your first journal entry here!</p>
      </>
    )
  }

  // if the user has any journal entries, they should show up
  journals.map((journal) => {
    return (
      <>
      <div>
        <p className="titleText">{journal.moonPhase}</p>
        <p className="text">
          {journal.text}
        </p>
      </div>
      </>
    )
  });

  return <>hello</>
}