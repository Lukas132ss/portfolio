import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #CCCCCC, #333333);
`;


function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
