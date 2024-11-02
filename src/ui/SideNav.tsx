import { FaUserCog } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface SideNavProps {
  collapsed: boolean;
}

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 5px;
    color: var(--color-zinc-500);
    transition: background-color 0.3s;

    white-space: nowrap;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-lime-600);
    background-color: var(--color-lime-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-zinc-500);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-lime-600);
  }
`;

function SideNav({ collapsed }: SideNavProps) {
  return (
    <nav>
      <StyledNav>
        <li>
          <StyledNavLink to="/dashboard">
            <HiHome />
            {collapsed || <span>Home</span>}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/notes">
            <FaNoteSticky />
            {collapsed || <span>Notes</span>}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/user">
            <FaUserCog />
            {collapsed || <span>User</span>}
          </StyledNavLink>
        </li>
      </StyledNav>
    </nav>
  );
}

export default SideNav;
