import { RxAvatar } from "react-icons/rx";
import styled from "styled-components";
import Logout from "../components/logout/logout";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const SyledHeader = styled.header`
  border-bottom: 1px solid var(--color-zinc-100);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

function Header() {
  const user = useSelector((state: RootState) => state.user);
  const firstName = user.fullName?.split(" ").slice(0, 1);
  console.log("firstName %s", firstName);

  return (
    <SyledHeader>
      <span>{firstName}</span>
      <RxAvatar />
      <Logout />
    </SyledHeader>
  );
}

export default Header;
