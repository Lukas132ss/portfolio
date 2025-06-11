import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  color: #fff;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

export default function SobreMim() {
  return (
    <Section id="sobre mim">
      <Title>Sobre Mim</Title>
      <Paragraph>Sou Lukas de Souza Santos, desenvolvedor focado em backend com C#. Tenho experiência na criação de APIs RESTful e integrações com ERPs para automação de processos. Busco sempre aplicar boas práticas, design patterns e arquitetura de software para entregar soluções escaláveis.</Paragraph>
    </Section>
  );
}

