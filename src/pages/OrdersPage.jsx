import styled from 'styled-components';

import { Header } from '../components/Header';
import { Orders } from '../components/Orders';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin: 0 auto;

  overflow: hidden;
`;

const OrdersPage = ({ logout }) => {
  return (
    <Wrapper>
      <Header logout={logout} />
      <Orders />
    </Wrapper>
  );
};

export default OrdersPage;
