import styled, { css } from "styled-components";

import { ButtonProps } from "../pages/Notes";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;
  `,
};

const btnTypes = {
  main: css`
    color: var(--color-lime-50);
    background-color: var(--color-lime-600);

    &:hover {
      background-color: var(--color-lime-700);
    }
  `,
  cancel: css`
    color: var(--color-zinc-600);
    background: var(--color-zinc-0);
    border: 1px solid var(--color-zinc-200);

    &:hover {
      background-color: var(--color-zinc-100);
    }
  `,
};

const Button = styled.button.attrs<ButtonProps>((props) => ({
  btnType: props.btnType || "main",
  size: props.size || "medium",
}))`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => btnTypes[props.btnType]}
`;

export default Button;
