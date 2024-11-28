import styled from "styled-components";

import { useNotes } from "../notes/useNotes";

import Heading from "../../ui/Heading";
import { HiDocumentText, HiFaceFrown } from "react-icons/hi2";
import { ReactElement } from "react";
import StatIcon from "./StatIcon";
import { MdCelebration } from "react-icons/md";

export type IconProps = {
  color: string;
  children?: ReactElement;
};

const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  border: 1px solid var(--color-zinc-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;

  & > *:first-child {
    margin-bottom: 2.6rem;
  }
`;

const StyledStatContainer = styled.div`
  display: flex;
  border: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  width: 80%;
  margin: auto;
`;

const StyledStat = styled.div`
  padding-left: 2rem;
  padding-top: 0.6rem;
`;

const StyledStatDesc = styled.p`
  color: var(--color-zinc-500);
`;

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
          <HiFaceFrown />
        </StatIcon>
        <StyledStat>
          <StyledStatDesc>Number of rejections</StyledStatDesc>
          <StyledStatNum>2</StyledStatNum>
        </StyledStat>
      </StyledStatContainer>

      <StyledStatContainer>
        <StatIcon color="lime">
          <MdCelebration />
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
