import styled from 'styled-components';

export const PlansContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  h1 {
    font-size: 24px;
    color: var(--red);
  }
`;

export const Calculator = styled.div`
  background: #ffffff;
  border: 2px solid #57555c;
  box-shadow: -2px 4px 0px #3bcd92;
  border-radius: 15px;
  padding: 1.5em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  p {
    font-size: 14px;
  }

  span {
    color: var(--red);
    font-weight: 700;
  }
`;

export const PlanGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
`;

export const PlanSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;

  div {
    width: 16px;
    height: 16px;
    background: ${(props) => (props.active ? '#FF6B6B' : '#ffc7c7')};
    border-radius: 50%;
  }

  h3 {
    font-size: 14px;
    line-height: 0;
    margin-top: 3px;
    color: ${(props) => (props.active ? '#FF6B6B' : '#57555C')};
  }
`;

export const PackageSelector = styled.div`
  border-radius: 8px;
  background: ${(props) => (props.active ? '#FF6B6B' : '#fff4f6')};
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  color: ${(props) => (props.active ? 'white' : '#57555c')};
  cursor: pointer;
  div {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-size: 14px;
  }
`;

export const Price = styled.div`
  font-size: 18px;

  p {
    font-size: 12px;
    color: #969696;;
  }
`;
