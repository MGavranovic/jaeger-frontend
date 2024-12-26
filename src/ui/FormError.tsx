import React from "react";
import styled from "styled-components";

interface FormErrorType {
  children: React.ReactNode;
}

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormError({ children }: FormErrorType) {
  if (!children) return null;
  return <Error>{children}</Error>;
}

export default FormError;
