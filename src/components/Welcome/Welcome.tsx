import { getAuth, signOut } from 'firebase/auth'
import { FunctionComponent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from '../../firebase/firebase'
import { Button } from '../Button/Button'
import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import { Container } from './Welcome.styles'

export const Welcome: FunctionComponent = () => {
  const auth = getAuth(app)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [user, loading, error] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
  }

  if (user) {
    return (
      <div>
        <p>Welcome, {user!.displayName}!</p>
        <Button onClick={logout}>Log out</Button>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>Whoops! There's been an error: {error.message}</p>
      </div>
    )
  }
  return (
    <>
      <Container>
        <div className="container">
          <Button
            onClick={() => {
              setIsLogin(true)
              setIsSignUp(false)
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              setIsSignUp(true)
              setIsLogin(false)
            }}
          >
            Sign Up
          </Button>
        </div>
        {isLogin && <Login />}
        {isSignUp && <SignUp />}
      </Container>
    </>
  )
}
