import styled from "styled-components";

const StyledSidebar = styled.aside`
  border-right: 1px solid red;
  padding: 3rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}

export default Sidebar;
