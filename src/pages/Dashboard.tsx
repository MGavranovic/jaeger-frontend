import styled from "styled-components";
import DashboardContainer from "../components/dashboard/DashboardContainer";
import Heading from "../ui/Heading";

const StyledDashboard = styled.div`
  display: flex;
  justify-content: center;
`;

function Dashboard() {
  return (
    <>
      <Heading as="h1">Dashboard</Heading>
      <StyledDashboard>
        <DashboardContainer />
      </StyledDashboard>
    </>
  );
}

export default Dashboard;
