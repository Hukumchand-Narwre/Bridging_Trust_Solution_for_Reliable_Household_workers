import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: ${(props) => `${props.verticalPadding} 0`};
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: #b91c1c;
`;

function FormRowVertical({ label, error, children, verticalPadding = "1.24rem" }) {
  return (
    <StyledFormRow verticalPadding={verticalPadding}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
