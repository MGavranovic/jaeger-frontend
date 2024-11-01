import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import styled from "styled-components";

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
      <HiArrowRightStartOnRectangle />
    </SyledHeader>
  );
}

export default Header;
