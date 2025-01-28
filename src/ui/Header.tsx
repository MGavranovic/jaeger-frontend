import { RxAvatar } from "react-icons/rx";
import styled from "styled-components";
import Logout from "../components/logout/logout";

const SyledHeader = styled.header`
  border-bottom: 1px solid var(--color-zinc-100);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

function Header() {
  return (
    <SyledHeader>
      <span>HEADER</span>
      <RxAvatar />
      <Logout />
    </SyledHeader>
  );
}

export default Header;
