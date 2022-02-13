import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './components/Home/Home'
import { Welcome } from './components/Welcome/Welcome'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Welcome />
    </>
  )
}