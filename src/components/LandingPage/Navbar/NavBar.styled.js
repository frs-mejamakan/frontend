import styled from 'styled-components';

export const NavbarContainer = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 120px;
    height: auto;
  }

  h3 {
    font-size: 14px;
    color: var(--maintext);
    cursor: pointer;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
