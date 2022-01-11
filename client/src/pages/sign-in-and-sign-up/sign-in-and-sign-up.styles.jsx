import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    margin: 0;
    padding: 30px 0;

    gap: 100px;
  }
`;
