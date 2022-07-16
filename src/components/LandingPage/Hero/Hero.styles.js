import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 350px;
  transition: max-height 2.5s ease-out;

  gap: 1.5em;
  h1 {
    font-size: 32px;
    text-align: center;
    color: var(--red);
    line-height: 120%;
  }

  p {
    font-size: 14px;
    text-align: center;
  }
`;
