import styled from "styled-components";
import { useNotes } from "../notes/useNotes";
import Heading from "../../ui/Heading";
import {
  AreaChart,
  CartesianAxis,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
  const { notes } = useNotes();
  console.log("Note from the Apps Chart", notes);
  return (
    <ChartBox>
      <Heading as="h2">Applications chart</Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={notes}>
          <XAxis
            dataKey="label"
            tick={{ stroke: "red" }}
            tickLine={{ fill: "blue" }}
          />
          <YAxis />
          <CartesianGrid strokeDasharray="5" />
          {/* <Area /> */}
        </AreaChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default ApplicationsChart;
