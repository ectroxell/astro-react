import { getAuth, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { app } from '../../firebase/firebase'
import { Button } from '../Button/Button'

export const SignUp = () => {
  const auth = getAuth(app)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  const handleSubmit = (e: any) => {
    createUserWithEmailAndPassword(email, password).then(result => {
      const user = auth.currentUser
      if (user) {
        return updateProfile(user, { displayName })
      }
    })
    e.preventDefault()
  }
  
  return (
    <>
      <form
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <div className="email">
          <label>Email: </label>
          <input
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
          />
        </div>
        <div className="password">
          <label>Password: </label>
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
          />
        </div>
        <div className="displayName">
          <label>Name: </label>
          <input
            onChange={e => setDisplayName(e.target.value)}
            name="displayName"
            type="text"
          />
        </div>
        <div>
          <Button>Create Account</Button>
        </div>
      </form>
    </>
  )
}
