import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  position: absolute;
  margin: 0 auto;
  background: #4d106d;

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;
      padding: 0 60px;

      @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
    }

    @media screen and (max-width: 720px) {
      width: 100%;
    }
`;