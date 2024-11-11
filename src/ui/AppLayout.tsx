import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const StyledAppLayout = styled.div<{ collapsed: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.collapsed ? "10rem" : "26rem")} 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-zinc-50);
  padding: 3rem;
  overflow: hidden;
`;

const Container = styled.div`
  /* max-width: 120rem; */
  height: 100%;
  margin: 0 auto;
`;

function AppLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  return (
    <StyledAppLayout collapsed={collapsed}>
      <Header />
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
