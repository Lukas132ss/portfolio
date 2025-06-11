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

export default function Curriculo() {
  return (
    <Section id="curriculo">
      <Title>Currículo</Title>
      <Paragraph><strong>Objetivo:</strong> Desenvolvedor especializado em C#, aplicando boas práticas, design patterns e arquitetura de software para soluções escaláveis.</Paragraph>
      <Paragraph><strong>Resumo:</strong> Desenvolvedor fullstack com experiência em C#, PHP, JavaScript, MySQL e SQL Server. Foco atual exclusivo em C#, desenvolvimento backend e arquitetura de software.</Paragraph>
      <Paragraph><strong>Formação:</strong> Ciências da Computação - Estácio de Sá (2017 - 2024)</Paragraph>
      <Paragraph><strong>Idiomas:</strong> Inglês avançado com diploma na Cultura Inglesa.</Paragraph>
      <Paragraph><strong>Experiência:</strong></Paragraph>
      <ul>
        <li>Onclick (Estagiário, 2022 - 2024) - Desenvolvimento e manutenção de aplicações web, integração com bancos SQL e suporte a ERPs.</li>
        <li>Empresa Atual (Desenvolvedor Trainee, 2024 - Atual) - Backend com C#, otimização de consultas SQL e integrações com ERPs.</li>
      </ul>
    </Section>
  );
}

