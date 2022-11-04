import { FunctionComponent } from 'react';
import { Home } from '../Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './navigation.scss';

export const NavigationBar: FunctionComponent = () => {
  return (
    <Router>
      <div className='container'>
        <nav>
          <ul className='navLinksContainer titleText'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/rituals">Rituals</Link>
            </li>
            <li>
              <Link to="/learn">Learn</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/journal" />
            {/* <Journal /> */}
          {/* <Route path="/rituals">
            <Rituals />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route> */}
        </Routes>
      </div>
    </Router>
  )
}

