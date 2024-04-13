import styled from 'styled-components'

const ExpenseRowItem = styled.li``

const ExpenseItemSmall = styled.div`
  display: flex;
  border-bottom: 2px solid #b8b8b8;
  padding: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const ExpenseItemLarge = styled.div`
  border-bottom: 2px solid #b8b8b8;
  padding: 0px;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const DateColumData = styled.div`
  width: 25%;

  padding-left: 12px;
  padding-right: 12px;
  border-right: 2px solid #c5c6c7;

  @media screen and (min-width: 768px) {
    width: 15.2%;
  }
`
const NameColumnData = styled(DateColumData)``

const CategoryColumnData = styled(DateColumData)``

const AmountColumnData = styled(DateColumData)``

const ExpenseCreaterData = styled(DateColumData)``

const PubhlishedColumnData = styled(DateColumData)``

const NameText = styled.p`
  width: 100%;
  font-size: 18px;
  font-family: Roboto;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`
const DateText = styled(NameText)``

const CategoryText = styled(NameText)``

const AmountText = styled(NameText)``

const PubhlishedText = styled(NameText)``

const ExpenseCreaterText = styled(NameText)``

const EditDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`

const EditButton = styled.button`
  border: none;
  background-color: transparent;
`

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`

const ConfirmationContainer = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafcfc;
  height: 100%;
`

const ConfirmCard = styled.div`
  border: 3px solid #403f3f;
  border-radius: 6px;
  padding: 25px;
  padding-top: 20px;
  padding-bottom: 30px;
`

const ConfirmMessage = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #0a071d;
`

const ButtonContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`

const ButtonCancel = styled.button`
  background-color: #f22222;
  width: 120px;
  height: 35px;
  margin-right: 20px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  border: none;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`

const ButtonConfirm = styled(ButtonCancel)`
  background-color: #2bb828;
`
export {
  ExpenseRowItem,
  ExpenseItemSmall,
  ExpenseItemLarge,
  NameColumnData,
  DateColumData,
  CategoryColumnData,
  ExpenseCreaterData,
  AmountColumnData,
  PubhlishedColumnData,
  EditDeleteContainer,
  EditButton,
  DeleteButton,
  DateText,
  NameText,
  CategoryText,
  AmountText,
  PubhlishedText,
  ExpenseCreaterText,
  ConfirmationContainer,
  ConfirmCard,
  ConfirmMessage,
  ButtonContainer,
  ButtonCancel,
  ButtonConfirm,
}
