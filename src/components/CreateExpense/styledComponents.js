import styled from 'styled-components'

const AddExpenseContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    #ffffff,
    #ffffff,
    #ffffff,
    #fafcfc
  );
`

const AddExpenseResponsive = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 15px;
  }
`

const CreateExpenseImage = styled.img`
  display: none;
  margin-right: 15px;

  @media (min-width: 768px) {
    display: inline;
  }
`

const FormHeading = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  color: #174074;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin: 0px;
    margin-top: 20px;
  }
`

const CreateExpenseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #98999c;
  border-radius: 4px;
  width: 100%;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 0px;

  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
`

const FormContainer = styled.form`
  margin-top: 15px;
  margin-bottom: 20px;
`

const CreateInput = styled.input`
  padding: 10px;
  font-size: 13px;
  background-color: transparent;
  border: 1px solid #707072;
  margin: 0px;
  margin-top: 6px;
  outline: none;
  border-radius: 2px;

  @media screen and (min-width: 768px) {
    padding: 6px;
    background-color: #e9ecf3;
    border: none;
  }
`

const NameInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`

const DescriptionInputContainer = styled(NameInputContainer)``

const DateInputContainer = styled(NameInputContainer)``

const CategoryInputContainer = styled(NameInputContainer)``

const AmountInputContainer = styled(NameInputContainer)``

const AmountCreaterInputContainer = styled(NameInputContainer)``

const NameInputField = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #707072;
  margin: 0px;
  margin-top: 6px;
  outline: none;
  border-radius: 2px;

  @media screen and (min-width: 768px) {
    padding: 8px;
    background-color: #e9ecf3;
    border: none;
  }
`

const DescriptionInputField = styled(NameInputField)``

const DateInputFiled = styled(NameInputField)``

const AmountInputField = styled(NameInputField)``

const AmountCreaterInputField = styled(NameInputField)``

const NameInputLabel = styled.label`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 450;
  color: #1c1565;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
const DescriptionLabel = styled(NameInputLabel)``

const CategoryLabel = styled(NameInputLabel)``

const DateLabel = styled(NameInputLabel)``

const AmountLabel = styled(NameInputLabel)``

const AmountCreaterLabel = styled(NameInputLabel)``

const CategoryInputField = styled.select`
  padding: 10px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid #707072;
  margin-top: 4px;
  outline: none;
  border-radius: 4px;
  color: #1c1565;

  @media screen and (min-width: 768px) {
    padding: 10px;
    background-color: #e9ecf3;
    border-radius: 2px;
    border: none;
  }
`

const CreateCancelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 30px;
  }
`

const ButtonCreate = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  margin-left: 10px;
  background-color: rgb(34, 179, 15);
  font-family: Roboto;
  font-size: 14px;
  color: white;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 150px;
    padding: 6px;
    border-radius: 0px;
  }
`

const ButtonCancel = styled.button`
  width: 100%;
  font-family: Roboto;
  font-size: 14px;
  color: white;
  padding: 10px;
  margin-right: 10px;
  background-color: rgb(151, 150, 150);
  border: none;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 150px;
    padding: 6px;
    border-radius: 0px;
  }
`

export {
  AddExpenseContainer,
  AddExpenseResponsive,
  CreateExpenseImage,
  FormHeading,
  CreateExpenseCard,
  NameInputContainer,
  DescriptionInputContainer,
  CategoryInputContainer,
  DateInputContainer,
  AmountInputContainer,
  AmountCreaterInputContainer,
  FormContainer,
  CreateInput,
  NameInputLabel,
  DescriptionLabel,
  DateLabel,
  CategoryLabel,
  AmountLabel,
  AmountCreaterLabel,
  NameInputField,
  DescriptionInputField,
  DateInputFiled,
  AmountInputField,
  AmountCreaterInputField,
  CategoryInputField,
  CreateCancelContainer,
  ButtonCreate,
  ButtonCancel,
}
