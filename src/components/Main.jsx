import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
  margin: 30px;

  /* @media (min-width: 767px) {
    padding: 4rem 0;
  } */
`;

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
