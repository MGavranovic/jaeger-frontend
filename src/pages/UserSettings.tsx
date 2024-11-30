import UserSettingsContainer from "../components/usersettings/userSettingsContainer";
import Heading from "../ui/Heading";

function UserSettings() {
  return (
    <>
      <Heading as="h1">User settings</Heading>
      <UserSettingsContainer />
    </>
  );
}

export default UserSettings;
