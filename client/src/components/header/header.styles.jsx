import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media only screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media only screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }

  @media only screen and (max-width: 465px) {
    .logo {
      width: 60%;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  @media only screen and (max-width: 465px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 435px) {
    font-size: 11px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
