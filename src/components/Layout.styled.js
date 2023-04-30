import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 22px;
  text-decoration: none;
  padding: 10px;
  border: 1px dashed orange;
  &.active {
    color: orange;
  }
`;
export default StyledLink;

export const Header = styled.header`
  padding: 30px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.44);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Section = styled.section`
  padding: 20px 30px;
`;
