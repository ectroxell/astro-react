import { FunctionComponent } from 'react';
import MoonIcon from '../icons/Moon';
import { Container, Text } from './Home.styles'

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <MoonIcon />
      <Text>Welcome to Moonology</Text>
    </Container>
  )
}
 
