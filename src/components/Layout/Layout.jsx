import { Outlet } from 'react-router-dom';
import StyledLink from './Layout.styled';
import { Header, Nav, Section } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};
export default Layout;
