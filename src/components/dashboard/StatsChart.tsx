import styled from "styled-components";

import { useNotes } from "../notes/useNotes";

import Heading from "../../ui/Heading";
import { HiDocumentText } from "react-icons/hi2";
import { ReactElement } from "react";
import StatIcon from "./StatIcon";

export type IconProps = {
  color: string;
  children?: ReactElement;
};

const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  border: 1px solid var(--color-zinc-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const StyledStatContainer = styled.div`
  display: flex;
  border: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-md);
  padding: 1rem;
`;

const StyledStat = styled.div`
  color: var(--color-zinc-500);
  padding-left: 2rem;
`;

const StyledStatDesc = styled.p``;

const StyledStatNum = styled.p`
  color: var(--color-zinc-900);
`;

function StatsChart() {
  const { notes } = useNotes();
  console.log("Notes data from Stats Chart", notes);
  return (
    <StyledStatsContainer>
      <Heading as="h2">Stats</Heading>
      <StyledStatContainer>
        <StatIcon color="amber">
          <HiDocumentText />
        </StatIcon>
        <StyledStat>
          <StyledStatDesc>Number of applications</StyledStatDesc>
          <StyledStatNum>2</StyledStatNum>
        </StyledStat>
      </StyledStatContainer>

      <StyledStatContainer>
        <StatIcon color="red">
          <HiDocumentText />
        </StatIcon>
        <StyledStat>
          <StyledStatDesc>Number of rejections</StyledStatDesc>
          <StyledStatNum>2</StyledStatNum>
        </StyledStat>
      </StyledStatContainer>

      <StyledStatContainer>
        <StatIcon color="lime">
          <HiDocumentText />
        </StatIcon>
        <StyledStat>
          <StyledStatDesc>Number of offers</StyledStatDesc>
          <StyledStatNum>2</StyledStatNum>
        </StyledStat>
      </StyledStatContainer>
    </StyledStatsContainer>
  );
}

export default StatsChart;
