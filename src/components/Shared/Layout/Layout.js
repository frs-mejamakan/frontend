import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 450px;
  min-height: 100vh;
  border-left: 2px solid #efefef;
  border-right: 2px solid #efefef;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (max-width: 560px) {
    width: 100%;
    border-left: none;
    border-right: none;
  }
`;

export const Body = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;

  gap: 50px;
`;

export const Section = styled.div`
  padding: 50px 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    font-size: 24px;
    color: var(--red);
  }

  span {
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

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  padding: 1em 0;
  transform: translate(-5%, 0%);

  @media screen and (min-width: 560px) {
    position: sticky;
    transform: none;
  }
`;
