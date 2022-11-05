import { getAuth, signOut } from 'firebase/auth'
import { FunctionComponent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { fetchMoonData } from '../../domain/data/moon-phase'
import { app } from '../../firebase/firebase'
import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import './home.scss'
import '../../index.scss'
import MoonIcon from '../assets/icons/Moon'


export const Home: FunctionComponent = () => {
  const auth = getAuth(app)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [user] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
  };

  const moonData = fetchMoonData();

  if (user) {
    return ( 
    <>
      <div className='welcomeContainer text'>
      <MoonIcon width={'180pt'} height={'180pt'}/>
      <p className='titleText'>Welcome to Moonology</p>
        <p>Hello {user!.displayName}! ✨</p>
        {moonData ?
          <p>The moon is {moonData.illuminated}% illuminated and in the {moonData.phase} phase.</p> : null
        }
        <button onClick={logout}>Log out</button>
      </div>
    </>
    )
  }
  return (
    <>
    <div className='homeWrapper'>
      <div className='homeContainer'>
      <MoonIcon width={'180pt'} height={'180pt'}/>
        <p className='titleText'>Welcome to Moonology</p>

      </div>
        <div className='homeContainer text'>
          <div className='buttonContainer'>
            <button
              onClick={() => {
                setIsLogin(true)
                setIsSignUp(false)
              }}
              hidden={isLogin}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsSignUp(true)
                setIsLogin(false)
              }}
              hidden={isSignUp}
            >
              Sign Up
            </button>
          </div>
          {isLogin && <Login />}
          {isSignUp && <SignUp />}
          </div>
          </div>
    </>
  )
}

