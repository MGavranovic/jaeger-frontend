import styled from "styled-components";
import { useNotes } from "../notes/useNotes";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type ApplicationChartData = {
  label: string;
  totalApplications: number;
  totalInterviews: number;
  totalOffers: number;
};

const ChartBox = styled.div`
  grid-column: 1/-1;
  background-color: white;
  border: 1px solid var(--color-zinc-200);
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

const StyledHeaderDates = styled.p`
  color: var(--color-zinc-500);
`;

function ApplicationsChart() {
  const user = useSelector((state: RootState) => state?.user);
  const { data: notes = [], isLoading } = useNotes(user?.id);

  const colors = {
    totalApplications: { stroke: "#f59e0b", fill: "#fde047" },
    totalInterviews: { stroke: "#06b6d4", fill: "#67e8f9" },
    totalOffers: { stroke: "#d946ef", fill: "#f0abfc" },
    text: "#27272a",
    background: "#fff",
  };

  const today = new Date();
  const allDates = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date(new Date().setDate(today.getDate() - i));
    allDates.push(date);
  }

  const data: ApplicationChartData[] = allDates.map((date) => {
    return {
      label: `${date.toLocaleString("default", {
        month: "short",
        day: "2-digit",
      })}`,
      totalApplications: notes.reduce((count, note) => {
        return new Date(note.appliedOn)?.toDateString() === date.toDateString()
          ? count + 1
          : count;
      }, 0),
      totalInterviews: notes.reduce((count, note) => {
        return new Date(note.appliedOn)?.toDateString() ===
          date.toDateString() && note.applicationStatus === "interview"
          ? count + 1
          : count;
      }, 0),
      totalOffers: notes.reduce((count, note) => {
        return new Date(note.appliedOn)?.toDateString() ===
          date.toDateString() && note.applicationStatus === "offer"
          ? count + 1
          : count;
      }, 0),
    };
  });

  return (
    <ChartBox>
      <Heading as="h2">
        Applications chart{" "}
        <StyledHeaderDates>
          {allDates[allDates.length - 1].toLocaleString("default", {
            month: "short",
            day: "2-digit",
          })}{" "}
          &mdash;{" "}
          {allDates[0].toLocaleString("default", {
            month: "short",
            day: "2-digit",
          })}
        </StyledHeaderDates>
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" tick={{ fill: colors.text }} />
          <YAxis tick={{ fill: colors.text }} allowDecimals={false} />
          <CartesianGrid strokeDasharray="5" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalApplications"
            type="monotone"
            stroke={colors.totalApplications.stroke}
            fill={colors.totalApplications.fill}
          />
          <Area
            dataKey="totalInterviews"
            type="monotone"
            stroke={colors.totalInterviews.stroke}
            fill={colors.totalInterviews.fill}
          />
          <Area
            dataKey="totalOffers"
            type="monotone"
            stroke={colors.totalOffers.stroke}
            fill={colors.totalOffers.fill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default ApplicationsChart;
