import styled from 'styled-components';

import { UserInfo } from './UserInfo';

const Wrapper = styled.header`
  padding: 10px 20px 10px 13px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  background-color: #ffffff;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
`;

const LogoutButton = styled.button`
  width: 65px;
  height: 25px;
  border: none;
  border-radius: var(--radii);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--fs-12);
  font-weight: var(--fw-bold);
  line-height: 14.52px;

  color: #595959;
  background-color: #f7f5f5;

  outline: none;

  cursor: pointer;
  transition: background-color linear 0.2s;

  &:hover {
    background-color: #c5c5c5;
  }

  &:focus {
    border: 1px solid black;
  }
`;

export const Header = ({ logout }) => {
  return (
    <Wrapper>
      <UserInfo />
      <LogoutButton onClick={logout}>Выход</LogoutButton>
    </Wrapper>
  );
};
