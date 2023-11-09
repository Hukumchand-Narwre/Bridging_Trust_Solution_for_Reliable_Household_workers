import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Image from "../assets/Logo.jpeg";
const StyledSidebar = styled.aside`
  background-color: #fff;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid #f3f4f6;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <img src={Image} className="w-28 " />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
