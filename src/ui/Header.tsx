import styled from "styled-components";

const SyledHeader = styled.header`
  border-bottom: 1px solid;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return <SyledHeader>HEADER</SyledHeader>;
}

export default Header;
