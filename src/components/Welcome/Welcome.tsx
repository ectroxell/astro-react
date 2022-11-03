import { getAuth, signOut } from 'firebase/auth'
import { FunctionComponent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { fetchMoonData } from '../../domain/data/moon-phase'
import { app } from '../../firebase/firebase'
import { Button } from '../../styles/GlobalStyle'
import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import { ButtonContainer, Container, Text } from './Welcome.styles'


export const Welcome: FunctionComponent = () => {
  const auth = getAuth(app)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [user, loading, error] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
  };

  const moonData = fetchMoonData();

  if (user) {
    return (
      <Container>
        <Text>Welcome, {user!.displayName}!</Text>
        {moonData ?
          <Text>The moon is {moonData.illuminated}% illuminated and in the {moonData.phase} phase</Text> : null
        }
        <Button onClick={logout}>Log out</Button>
      </Container>
    )
  }
  return (
    <>
      <Container>
        <ButtonContainer>
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
        </ButtonContainer>
        {isLogin && <Login />}
        {isSignUp && <SignUp />}
      </Container>
    </>
  )
}
