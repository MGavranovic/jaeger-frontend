import styled from "styled-components";
import Logo from "./Logo";
import SideNav from "./SideNav";

const StyledSidebar = styled.aside`
  border-right: 1px solid var(--color-zinc-100);
  padding: 3rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <SideNav />
    </StyledSidebar>
  );
}

export default Sidebar;
