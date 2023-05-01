import styled from 'styled-components';

export const Input = styled.input`
  width: 320px;
  font-size: 24px;
  margin: 0 40px;
  border: thick double orange;
  padding-left: 20px;
`;
export const Button = styled.button`
  font-size: 24px;
  padding: 0 10px;
  background-color: transparent;
  border: thick double orange;
  cursor: pointer;
  transition: transform 250ms linear;
  outline: none;
  :hover {
    transform: scale(1.1);
  }
`;
