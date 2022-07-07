import styled from 'styled-components';

export const ChefContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    font-size: 24px;
    color: var(--red);
  }

  button {
    align-self: center;
  }

  p {
    text-align: justify;
    margin-top: 0.5em;
    font-size: 14px;
  }
`;
