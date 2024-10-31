import styled from "styled-components";

const StyledImg = styled.img`
  width: 30px;
`;

function Logo() {
  return (
    <div>
      <StyledImg src="/sidebar-logo-reticle.png" alt="Sidebar Logo Reticle" />
    </div>
  );
}

export default Logo;
