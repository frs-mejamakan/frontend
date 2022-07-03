import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1em;
  gap: 1em;
  margin-bottom: 50px;
`;

export const SocialSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  gap: 1em;

  span {
    display: flex;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
  }
`;
