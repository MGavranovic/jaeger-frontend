import styled from "styled-components";
import Button from "../../ui/Button";

const StyledForm = styled.form`
  padding: 3rem;
`;

const StyledFormSection = styled.div`
  display: grid;
  grid-template-columns: 20rem 40rem 30rem;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
`;

const StyledButtonSections = styled.div`
  display: flex;
  gap: 3rem;
  padding-top: 1rem;
  width: 70rem;
  justify-content: space-around;
`;

function UserSettingsForm() {
  return (
    <StyledForm>
      <StyledFormSection>
        <label htmlFor="">Full name</label>
        <p>*users full name</p>
      </StyledFormSection>
      <StyledFormSection>
        <label htmlFor="">New full name</label>
        <input type="text" name="" id="" />
        <p>**new users full name</p>
      </StyledFormSection>

      <StyledFormSection>
        <label htmlFor="">Email address</label>
        <p>*email address name</p>
      </StyledFormSection>
      <StyledFormSection>
        <label htmlFor="">New email address</label>
        <input type="text" name="" id="" />
        <p>**new email address name</p>
      </StyledFormSection>

      <StyledFormSection>
        <label htmlFor="">Change password</label>
        <input type="text" />
      </StyledFormSection>
      <StyledFormSection>
        <label htmlFor="">Confirm new password</label>
        <input type="text" />
      </StyledFormSection>

      <StyledButtonSections>
        <Button size="large">Confirm</Button>
        <Button size="large" btnType="delete">
          Cancel
        </Button>
      </StyledButtonSections>
    </StyledForm>
  );
}

export default UserSettingsForm;
