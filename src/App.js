import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Curriculo from './components/Curriculo';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #0d1117, #161b22);
`;


function App() {
  const [activeSection, setActiveSection] = useState('curriculo');

  useEffect(() => {
    window.location.hash = 'curriculo';
  }, []);

  return (
    <AppContainer>
      <Header onSelect={setActiveSection} />
      {activeSection === 'curriculo' && <Curriculo />}
      {activeSection === 'sobre-mim' && <SobreMim />}
      {activeSection === 'projetos' && <Projetos />}
      {activeSection === 'contato' && <Contato />}
    </AppContainer>
  );
}

export default App;
