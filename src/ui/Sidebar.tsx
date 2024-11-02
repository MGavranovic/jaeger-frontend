import styled from "styled-components";
import Logo from "./Logo";
import SideNav from "./SideNav";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const StyledSidebar = styled.aside<SidebarProps>`
  border-right: 1px solid var(--color-zinc-100);
  padding: 3rem;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: ${(props) => (props.collapsed ? "10rem" : "26rem")};
  transition: width 0.3s ease;
  overflow: hidden;
`;

function Sidebar({ collapsed, toggleSidebar }: SidebarProps) {
  return (
    <StyledSidebar collapsed={collapsed}>
      <Logo collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <SideNav collapsed={collapsed} />
    </StyledSidebar>
  );
}

export default Sidebar;
