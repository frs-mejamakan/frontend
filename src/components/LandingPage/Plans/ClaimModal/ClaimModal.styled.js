import styled from 'styled-components';

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 1.5em;
  border-radius: 15px;
  max-width: 360px;
  min-width: 300px;
  background: #ffff;
  display: flex;
  flex-direction: column;
  gap: 1em;

  p {
    font-size: 14px;
  }

  span {
    color: var(--red);
  }

  border: 2px solid #57555c;
  box-shadow: -2px 4px 0px var(--red);
`;

export const Header = styled.div`
  text-align: center;
  color: var(--red);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;

  label {
    font-family: 'Baloo Bhai';
    font-size: 500;
  }

  input {
    font-family: 'Helvetica Neue';
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    cursor: pointer;
  }
`;
