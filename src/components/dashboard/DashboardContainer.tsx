import styled from "styled-components";
import StatusChart from "./StatusChart";
import StatsChart from "./StatsChart";
import ApplicationsChart from "./ApplicationsChart";

const StyledDashboardContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
`;

function DashboardContainer() {
  return (
    <StyledDashboardContainer>
      <StatsChart />
      <StatusChart />
      <ApplicationsChart />
    </StyledDashboardContainer>
  );
}

export default DashboardContainer;
