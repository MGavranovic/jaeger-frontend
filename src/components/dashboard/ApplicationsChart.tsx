import styled from "styled-components";

const ChartBox = styled.div`
  grid-column: 1/-1;
  background-color: white;
  border: 1px solid var(--color-zinc-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  margin-top: 3rem;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

function ApplicationsChart() {
  return <ChartBox>Applications chart</ChartBox>;
}

export default ApplicationsChart;
