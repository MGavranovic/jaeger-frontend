import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  width: 9rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledImg src="/sidebar-logo-reticle.png" alt="Sidebar Logo Reticle" />
    </StyledLogo>
  );
}

export default Logo;
