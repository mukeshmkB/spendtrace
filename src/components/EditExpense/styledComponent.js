import styled from 'styled-components'

const EditExpenseContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to left,
    #ffffff,
    #ffffff,
    #ffffff,
    #fafcfc
  );
`

const EditExpenseResponsive = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media (min-width: 768px) {
    width: 90%;
    max-width: 1250px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 10px;
  }
`

const FormHeading = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  margin: 0px;
  color: #878e89;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

const EditExpenseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid rgb(137, 136, 136);
  border-radius: 4px;
  width: 100%;
  flex: 1;
  padding: 15px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
  }
`

const FormContainer = styled.form`
  margin-top: 15px;
  margin-bottom: 20px;
`

const NameInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`

const DescriptionInputContainer = styled(NameInputContainer)``

const DateInputContainer = styled(NameInputContainer)``

const AmountInputContainer = styled(NameInputContainer)``

const AmountCreaterInputContainer = styled(NameInputContainer)``

const CategoryInputContainer = styled(NameInputContainer)``

const NameInputField = styled.input`
  border: 1px solid #adb3bd;
  padding: 10px;
  margin-bottom: 6px;
  font-family: Roboto;
  font-size: 16px;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 10px;
    font-size: 13px;
  }
`
const DescriptionInputField = styled(NameInputField)``
const DateInputField = styled(NameInputField)``

const AmountInputField = styled(NameInputField)``

const AmountCreaterInputField = styled(NameInputField)``

const NameLabel = styled.label`
  font-family: Roboto;
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 450;
  color: #1c1565;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
const CategoryLabel = styled(NameLabel)``

const DateLabel = styled(NameLabel)``

const AmountLabel = styled(NameLabel)``

const AmountCreaterLabel = styled(NameLabel)``

const DescriptionLabel = styled(NameLabel)``

const CategoryInputField = styled.select`
  border: 1px solid #adb3bd;
  padding: 10px;
  margin-top: 4px;
  font-family: Roboto;
  font-size: 13px;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 6px;
  }
`

const EditExpenseImage = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    height: 550px;
    width: 550px;
  }
`

const CreateCancelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const ButtonCreate = styled.button`
  width: 160px;
  border: none;
  padding: 10px;
  background-color: rgb(34, 179, 15);
  font-family: Roboto;
  font-size: 13px;
  color: white;

  @media screen and (min-width: 768px) {
    padding: 7px;
  }
`

const ButtonCancel = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  background-color: rgb(151, 150, 150);
  font-family: Roboto;
  font-size: 13px;
  color: white;

  @media screen and (min-width: 768px) {
    padding: 7px;
  }
`

export {
  EditExpenseContainer,
  EditExpenseResponsive,
  FormHeading,
  EditExpenseCard,
  FormContainer,
  NameInputContainer,
  DescriptionInputContainer,
  DateInputContainer,
  AmountInputContainer,
  CategoryInputContainer,
  AmountCreaterInputContainer,
  NameLabel,
  CategoryLabel,
  DateLabel,
  AmountLabel,
  AmountCreaterLabel,
  DescriptionLabel,
  NameInputField,
  DescriptionInputField,
  DateInputField,
  AmountInputField,
  AmountCreaterInputField,
  CategoryInputField,
  EditExpenseImage,
  CreateCancelContainer,
  ButtonCreate,
  ButtonCancel,
}
