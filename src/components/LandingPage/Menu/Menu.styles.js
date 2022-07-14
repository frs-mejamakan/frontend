import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 0 1em;
  }

  h1 {
    font-size: 24px;
    color: var(--red);
  }

  p {
    font-size: 14px;
    font-style: italic;
  }

  button {
    align-self: center;
  }
`;

export const WeeklyList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeeklyMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  gap: 0.5em;

  h3 {
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 1.25em;
  }
`;

export const MenuSlider = styled.div`
  flex: 1;
  display: flex;
  gap: 1em;
  overflow-x: scroll;

  padding-bottom: 10px;
  padding-left: 1em;

  :last-child {
    padding-right: 1em;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.div`
  border: 2px solid #fff4f6;
  box-shadow: 5px 4px 0px ${(props) => props.color};
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  min-width: 143px;
  overflow: hidden;

  img {
    width: 143px;
    height: 100px;
    border-bottom: 2px solid #fff4f6;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  h3 {
    font-size: 14px;
    text-transform: capitalize;
    padding: 0.3em 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  span {
    margin-top: -0.3em;
    padding: 0.3em 0.5em;
    text-transform: capitalize;
  }

  p {
    font-size: 12px;
  }
`;
