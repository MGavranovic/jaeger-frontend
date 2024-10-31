import styled from "styled-components";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  border-right: 1px solid red;
  padding: 3rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <p>Home/Dashboard</p>
      <p>Notes</p>
    </StyledSidebar>
  );
}

export default Sidebar;
