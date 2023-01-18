import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  background-color: #ffffff;
  width: 100%;
  max-width: 443px;
  padding: 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
`;

const FormInput = styled.input`
  padding: 18px 22px;
  border: 1px solid #d9d9d9;
  background-color: #fafafa;
  outline: none;

  border-radius: var(--radii);

  font-size: var(--fs-24);

  :active,
  :focus {
    border: 1px solid #000000;
  }

  ::placeholder {
    color: #c1c0c0;
    font-weight: var(--fw-bold);
  }
`;

const FormButton = styled.input.attrs({
  type: 'submit',
  value: 'войти',
})`
  padding: 12px 0;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #86cd89;
  border: none;
  outline: none;

  cursor: pointer;

  font-weight: var(--fw-bold);
  font-size: var(--fs-32);

  border-radius: var(--radii);

  transition: background-color linear 0.1s;

  &:hover {
    background-color: #659867;
  }
`;

const FormLink = styled.a.attrs({ href: '#' })`
  color: #a2a3a7;
  text-decoration: none;
  line-height: 1.5;

  font-size: var(--fs-20);
  font-weight: var(--fw-normal);

  transition: color linear 0.1s;

  &:hover {
    color: #000000;
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

export const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ name: '', email: '', password: '' });

  const submitHandler = e => {
    e.preventDefault();

    login(details);
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <FormInput
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={e => {
          setDetails({ ...details, email: e.target.value });
        }}
        value={details.email}
      />

      <FormInput
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
        onChange={e => {
          setDetails({ ...details, password: e.target.value });
        }}
        value={details.password}
      />
      {error !== '' ? (
        <ErrorMessage className="error">{error}</ErrorMessage>
      ) : (
        ''
      )}

      <FormButton />

      <FormLink>Забыли пароль?</FormLink>
    </Wrapper>
  );
};
