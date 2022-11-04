import { FunctionComponent } from 'react';
import MoonIcon from '../icons/Moon';
import './navigation.scss';

export const NavigationBar: FunctionComponent = () => {
  return (
    <div className='container'>
      <MoonIcon width={'100pt'} height={'100pt'}/>
    </div>
  )
}