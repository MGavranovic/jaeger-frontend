import styled from "styled-components";

interface LogoProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const StyledImg = styled.img<LogoProps>`
  width: ${(props) => (props.collapsed ? "3rem" : "9rem")};
`;

function Logo({ collapsed, toggleSidebar }: LogoProps) {
  return (
    <StyledLogo onClick={toggleSidebar}>
      <StyledImg
        src="/sidebar-logo-reticle.png"
        alt="Sidebar Logo Reticle"
        collapsed={collapsed}
      />
    </StyledLogo>
  );
}

export default Logo;
