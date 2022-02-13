import { getAuth, signOut } from 'firebase/auth'
import { FunctionComponent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from '../../firebase/firebase'
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
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
  return (
    <>
      <Container>
        <div className="container">
          <button
            onClick={() => {
              setIsLogin(true)
              setIsSignUp(false)
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsSignUp(true)
              setIsLogin(false)
            }}
          >
            Sign Up
          </button>
        </div>
        {isLogin && <Login />}
        {isSignUp && <SignUp />}
      </Container>
    </>
  )
}
