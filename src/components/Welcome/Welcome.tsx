import { getAuth, signOut } from 'firebase/auth'
import { FunctionComponent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { fetchMoonData } from '../../domain/data/moon-phase'
import { app } from '../../firebase/firebase'
import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import './welcome.scss'
import '../../index.scss'


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
    <>
      <div className='welcomeContainer text'>
        <p>Hello, {user!.displayName}!</p>
        {moonData ?
          <p>The moon is {moonData.illuminated}% illuminated and in the {moonData.phase} phase</p> : null
        }
        <button onClick={logout}>Log out</button>
      </div>
    </>
    )
  }
  return (
    <>
       <div className='container text'>
        <div className='buttonContainer'>
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
        </div>
    </>
  )
}
