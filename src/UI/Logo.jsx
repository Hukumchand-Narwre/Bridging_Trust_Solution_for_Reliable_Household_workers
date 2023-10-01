import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  justify-self: center;
`;

const Img = styled.img`
  width: 50%;
  aspect-ratio: 12/10;
  mix-blend-mode: darken;
  margin-left: auto;
  margin-right: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/Logo.jpeg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
