import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 450px;
  height: 100%;
  border-left: 2px solid #efefef;
  border-right: 2px solid #efefef;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 560px) {
    width: 100%;
    border-left: none;
    border-right: none;
  }
`;
