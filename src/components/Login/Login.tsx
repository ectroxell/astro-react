import { FunctionComponent, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from '../../firebase/firebase'
import { Container } from './Login.styles'
import { Button } from '../Button/Button'

export const Login: FunctionComponent = () => {
  const auth = getAuth(app)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
  }

  const handleSubmit = (e: any) => {
    login()
    e.preventDefault()
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    )
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {user === null ? (
        <Container>
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
            <div className='loginButton'>
              <Button>Log In</Button>
            </div>
          </form>
        </Container>
      ) : (
        <></>
      )}
    </>
  )
}
