import styled from 'styled-components';

export const HowContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  h1 {
    font-size: 24px;
    color: var(--red);
  }

  button {
    align-self: center;
  }

  padding-bottom: 50px;
`;

export const HowList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  gap: 1em;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 1em;

  p {
    font-size: 14px;
  }

  span {
    color: var(--red);
    font-weight: 700;
  }
`;

export const Indicator = styled.div`
  min-width: 28px;
  width: 28px;
  height: 28px;
  border: 2px solid #57555c;
  background: #ffff;
  border-radius: 50%;
  filter: drop-shadow(1px 1px 0px #ff6b6b);
  h3 {
    font-family: 'Baloo Bhai';
    text-align: center;
  }
`;
