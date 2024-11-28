import styled from "styled-components";

import { IconProps } from "./StatsChart";

const Icon = styled.div<IconProps>`
  width: 6rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

function StatIcon({ color, children }: IconProps) {
  return <Icon color={color}>{children}</Icon>;
}

export default StatIcon;
