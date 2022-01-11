import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 80px;

  @media only screen and (max-width: 800px) {
    padding: 20px 0;
  }
`;
