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

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Contato() {
  return (
    <Section id="contato">
      <Title>Contato</Title>
      <ContactList>
        <Contact>
          Email: <ContactLink href="mailto:lk@serrante.com.br">lk@serrante.com.br</ContactLink>
        </Contact>
        <Contact>
          LinkedIn: <ContactLink href="https://www.linkedin.com/in/lukas-de-souza-santos-3a2423183">/in/lukas-de-souza-santos-3a2423183</ContactLink>
        </Contact>
      </ContactList>
    </Section>
  );
}

