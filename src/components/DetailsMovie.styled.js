import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkBack = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  padding: 10px;
  border: 1px dashed orange;
  color: black;
`;
export default LinkBack;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
`;

export const ListSubInfo = styled.ul`
  display: flex;
  gap: 22px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ContainerSub = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
