import styled from 'styled-components';
import Header from './components/Header';
import Curriculo from './components/Curriculo';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #CCCCCC, #333333);
`;


function App() {
  return (
    <AppContainer>
      <Header />
      <Curriculo />
      <SobreMim />
      <Projetos />
      <Contato />
    </AppContainer>
  );
}

export default App;
