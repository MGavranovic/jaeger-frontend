import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useNotes } from "../notes/useNotes";
import { NoteDetails } from "../../data/data";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface StartDataItem {
  status: string;
  value: number;
  color: string;
}

const ChartBox = styled.div`
  background-color: white;
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startData = [
  {
    status: "applied",
    value: 0,
    color: "#f59e0b",
  },
  {
    status: "got-response",
    value: 0,
    color: "#71717a",
  },
  {
    status: "interview",
    value: 0,
    color: "#06b6d4",
  },
  {
    status: "offer",
    value: 0,
    color: "#d946ef",
  },
  {
    status: "rejected",
    value: 0,
    color: "#ef4444",
  },
  {
    status: "accepted",
    value: 0,
    color: "#84cc16",
  },
];

function prepareData(
  startData: StartDataItem[],
  notes: NoteDetails[]
): StartDataItem[] {
  function incArrayValue(arr: StartDataItem[], field: string) {
    return arr.map((obj) =>
      obj.status === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = notes
    .reduce((arr, cur) => {
      const status = cur.applicationStatus;
      switch (status) {
        case "applied":
          return incArrayValue(arr, "applied");
        case "got-response":
          return incArrayValue(arr, "got-response");
        case "interview":
          return incArrayValue(arr, "interview");
        case "offer":
          return incArrayValue(arr, "offer");
        case "rejected":
          return incArrayValue(arr, "rejected");
        case "accepted":
          return incArrayValue(arr, "accepted");
        default:
          return arr;
      }
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

function StatusChart() {
  const user = useSelector((state: RootState) => state?.user);
  const { data: notes = [], isLoading } = useNotes(user?.id);

  const data = prepareData(startData, notes);

  return (
    <ChartBox>
      <Heading as="h2">Statuses summary</Heading>
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={data}
            nameKey="status"
            dataKey="value"
            innerRadius={80}
            outerRadius={120}
            cx="40%"
            cy="50%"
          >
            {data.map((entry: StartDataItem | NoteDetails) => (
              <Cell fill={entry.color} stroke={entry.color} key={new Date()} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            // width={30}
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default StatusChart;
