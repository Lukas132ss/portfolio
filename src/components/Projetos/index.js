import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const ProjectList = styled.ul`
  padding: 0;
`;

const Project = styled.li`
  margin-bottom: 10px;
`;

export default function Projetos() {
  return (
    <Section id="projetos">
      <Title>Projetos</Title>
      <ProjectList>
        <Project>Portfólio em React para apresentação profissional.</Project>
        <Project>Integração de ERPs utilizando .NET para automação de fluxos.</Project>
      </ProjectList>
    </Section>
  );
}

