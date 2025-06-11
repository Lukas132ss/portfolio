import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  color: #fff;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const ContactList = styled.ul`
  padding: 0;
`;

const Contact = styled.li`
  margin-bottom: 10px;
`;

export default function Contato() {
  return (
    <Section id="contato">
      <Title>Contato</Title>
      <ContactList>
        <Contact>Email: <a href="mailto:lk@serrante.com.br">lk@serrante.com.br</a></Contact>
        <Contact>LinkedIn: <a href="https://www.linkedin.com/in/lukas-de-souza-santos-3a2423183">/in/lukas-de-souza-santos-3a2423183</a></Contact>
      </ContactList>
    </Section>
  );
}

