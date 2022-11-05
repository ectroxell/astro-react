import { FunctionComponent } from 'react';
import { Home } from '../Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import './navigation.scss';
import { JournalPage } from '../Journal/Journal';

export const NavigationBar: FunctionComponent = () => {
  return (
    <Router>
      <div className='container'>
        <nav>
          <ul className='navLinksContainer titleText'>
            <li>
              <Link to="/home">Home</Link>
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
          <Route path="/journal" element={<JournalPage />} />
          {/* <Route path="/rituals">
            <Rituals />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route> */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

