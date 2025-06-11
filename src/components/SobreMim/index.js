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

const Paragraph = styled.p`
  line-height: 1.6;
`;

export default function SobreMim() {
  return (
    <Section id="sobre-mim">
      <Title>Sobre Mim</Title>
      <Paragraph>
        Sou Lukas de Souza Santos, desenvolvedor backend apaixonado por C# e
        .NET Core. Tenho sólida experiência na criação de APIs RESTful,
        microserviços e integrações com ERPs para automação de processos
        críticos.
      </Paragraph>
      <Paragraph>
        Ao longo da minha trajetória, participei de projetos que automatizaram
        fluxos de pedido e faturamento, reduzindo em até 40% o tempo de
        processamento.
      </Paragraph>
      <Paragraph>
        Tenho forte domínio de princípios SOLID, design patterns (Factory,
        Repository, Strategy) e práticas de DDD/TDD, o que me permite entregar
        código limpo, testável e de fácil manutenção. Também possuo habilidades
        em bancos de dados SQL Server e MySQL, com otimização de consultas e
        modelagem relacional.
      </Paragraph>
      <Paragraph>
        Utilizo ferramentas de CI/CD como Azure DevOps e GitHub Actions para
        pipelines automatizadas.
      </Paragraph>
      <Paragraph>
        Além do lado técnico, sou reconhecido pela comunicação clara e pelo
        espírito colaborativo em squads ágeis, orientando colegas mais novos e
        promovendo sessões de pair programming. Busco constantemente aprender
        novas tecnologias e compartilhar conhecimento em comunidades de
        desenvolvedores, mantendo-me antenado às melhores práticas de arquitetura
        e DevOps para entregar soluções de alto impacto.
      </Paragraph>
    </Section>
  );
}

