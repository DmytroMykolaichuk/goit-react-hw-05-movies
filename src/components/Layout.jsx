import { Outlet } from 'react-router-dom';
import StyledLink from './Layout.styled';
import { Header, Nav, Section } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Section>
        <Outlet />
      </Section>
    </>
  );
};
export default Layout;
