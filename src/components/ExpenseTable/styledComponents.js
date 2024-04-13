import styled from 'styled-components'

const ExpenseListItems = styled.ul`
  background-color: #ffffff;
  list-style-type: none;
  padding-left: 0px;
  border: 2px solid #c5c6c7;
  border-bottom: none;
  border-radius: 6px;
`

const ExpenseRowHeadersSmall = styled.li`
  display: flex;
  background-color: #acadaf;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
const ExpenseRowHeadersLarge = styled.li`
  display: none;
  background-color: #acadaf;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const DateColumnHeader = styled.div`
  width: 25%;
  color: #3a3737;
  border-right: 2px solid #b8b8b8;
  padding-left: 12px;

  @media screen and (min-width: 768px) {
    width: 15.2%;
  }
`

const CategoryColumnHeader = styled(DateColumnHeader)``

const AmountColumnHeader = styled(DateColumnHeader)``

const NameColumnHeader = styled(DateColumnHeader)``

const CreatedColumnHeader = styled(DateColumnHeader)``

const UpdateColumnHeader = styled(DateColumnHeader)``

const EditCancelColumnHeader = styled.div``

const NameText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #000000;
`

const DateText = styled(NameText)``

const AmountText = styled(NameText)``

const CategoryText = styled(DateText)``

const CreateText = styled(DateText)``

const UpdateText = styled(DateText)``

export {
  ExpenseListItems,
  DateColumnHeader,
  CategoryColumnHeader,
  AmountColumnHeader,
  EditCancelColumnHeader,
  ExpenseRowHeadersSmall,
  ExpenseRowHeadersLarge,
  NameColumnHeader,
  CreatedColumnHeader,
  UpdateColumnHeader,
  NameText,
  CategoryText,
  DateText,
  AmountText,
  CreateText,
  UpdateText,
}
