import { FunctionComponent } from 'react';
import MoonIcon from '../icons/Moon';
import { Welcome } from '../Welcome/Welcome';
import './home.scss';
import '../../index.scss'

export const Home: FunctionComponent = () => {
  return (
    <div className='container'>
      <MoonIcon width={'180pt'} height={'180pt'}/>
      <p className='titleText'>Welcome to Moonology</p>
      <Welcome />
    </div>
  )
}
 
