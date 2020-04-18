import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #d9dad6;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    padding: 10px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledLogo = styled.img`
  width: 125px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;