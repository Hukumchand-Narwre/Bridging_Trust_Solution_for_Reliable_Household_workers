import styled from "styled-components";
import Image from "../assets/Logo.jpeg";
const StyledLogo = styled.div`
  text-align: center;
  justify-self: center;
`;

const Img = styled.img`
  width: 50%;
  aspect-ratio: 4/3;
  mix-blend-mode: darken;
  margin-left: auto;
  margin-right: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={Image} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
