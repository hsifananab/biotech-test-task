import styled from 'styled-components';

import { users } from '../data';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserImageContainer = styled.div`
  display: block;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: #b9b9b9;
`;

const UserImage = styled.img``;

const UserData = styled.div``;

const UserName = styled.h3`
  font-size: var(--fs-16);
  font-weight: var(--fw-bold);
  line-height: 19.36px;
`;

const UserEmail = styled.p`
  font-size: var(--fs-12);
  font-weight: var(--fw-normal);
  line-height: 14.52px;
  color: #9d9d9d;
`;

export const UserInfo = () => {
  const userEmail = localStorage.getItem('emailData');
  const userName = users.find(user => user.email === userEmail).name;

  return (
    <Wrapper>
      <UserImageContainer>
        <UserImage />
      </UserImageContainer>
      <UserData>
        <UserName>{userName}</UserName>
        <UserEmail>{userEmail}</UserEmail>
      </UserData>
    </Wrapper>
  );
};
