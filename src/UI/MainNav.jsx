import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useAuthStore } from "../store/Auth";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(#d1d5db);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active {
    color: black;
    background-color: #f9fafb;
    border-radius: 5px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #6b7280;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #4f46e5;
  }
`;

function MainNav() {
  const { user: users, setToken } = useAuthStore();
  const currentUrl = window.location.href;
  const admin = currentUrl.split("/").includes("Admin");
  const user = currentUrl.split("/").includes("User");
  const worker = currentUrl.split("/").includes("Worker");
  let displayNav;
  if (admin) {
    displayNav = (
      <>
        <li>
          <StyledNavLink to="/Admin">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Admin/NewRequest">
            <HiOutlineCalendarDays />
            <span>New Request</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Admin/Holiday">
            <HiOutlineHomeModern />
            <span>Holidays</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink onClick={() => setToken(null)} to="/Login">
            <HiOutlineCog6Tooth />
            <span>Log Out</span>
          </StyledNavLink>
        </li>
      </>
    );
  }
  if (user) {
    displayNav = (
      <>
        <li>
          <StyledNavLink to="/User">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/User/user-detail">
            <HiOutlineHomeModern />
            <span>Your Account</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink onClick={() => setToken(null)} to="/">
            <HiOutlineCog6Tooth />
            <span>Log Out</span>
          </StyledNavLink>
        </li>
      </>
    );
  }
  if (worker) {
    displayNav = (
      <>
        <li>
          <StyledNavLink to="/Worker">
            <HiOutlineHomeModern />
            <span>Holidays</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Worker/Worker-detail">
            <HiOutlineHomeModern />
            <span>Your Account</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink onClick={() => setToken(null)} to="/">
            <HiOutlineCog6Tooth />
            <span>Log Out</span>
          </StyledNavLink>
        </li>
      </>
    );
  }
  return (
    <nav>
      <NavList>{displayNav}</NavList>
    </nav>
  );
}

export default MainNav;
