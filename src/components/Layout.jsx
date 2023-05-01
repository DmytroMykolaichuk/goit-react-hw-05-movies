import { Outlet } from 'react-router-dom';
import StyledLink from './Layout.styled';
import { Header, Nav, Section } from './Layout.styled';
import { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';
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
          <Suspense
            fallback={
              <Circles
                height="80"
                width="80"
                color="#f8a100"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};
export default Layout;
