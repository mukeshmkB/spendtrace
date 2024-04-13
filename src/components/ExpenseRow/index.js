import {useState} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {formatDistanceToNow} from 'date-fns'

import {HiPencil} from 'react-icons/hi'
import {BiSolidTrash} from 'react-icons/bi'

import EditExpense from '../EditExpense'

import {
  ExpenseRowItem,
  ExpenseItemSmall,
  ExpenseItemLarge,
  NameColumnData,
  DateColumData,
  PubhlishedColumnData,
  CategoryColumnData,
  ExpenseCreaterData,
  AmountColumnData,
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
} from './styledComponents'

const ExpenseRow = props => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    eachRowDetails,
    updateExistsExpense,
    deleteEixstsExpense,
    editData,
    updateExpenseObject,
  } = props

  const {
    id,
    name,
    category,
    expenseAmount,
    expenseDate,
    publishedAt,
    expenseCreator,
  } = eachRowDetails

  const handleMethod = () => {
    updateExistsExpense(id)
    console.log(id)
    setIsOpen(true)
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <ExpenseRowItem>
      <ExpenseItemSmall>
        <DateColumData>
          <DateText>{expenseDate}</DateText>
          <NameText>{name}</NameText>
        </DateColumData>

        <CategoryColumnData>
          <CategoryText>{category}</CategoryText>
        </CategoryColumnData>

        <AmountColumnData>
          <AmountText> INR {expenseAmount}</AmountText>
        </AmountColumnData>

        <EditDeleteContainer>
          <EditButton
            type="button"
            aria-label="Edit Button"
            onClick={handleMethod}
          >
            <HiPencil size={30} />
          </EditButton>

          <Popup modal className="popup-content" open={isOpen}>
            <EditExpense
              close={handleCloseModal}
              editData={editData}
              updateExpenseObject={updateExpenseObject}
            />
          </Popup>
          <Popup
            modal
            className="popup-confirmation"
            trigger={
              <DeleteButton
                type="button"
                aria-label="Delete Button"
                onClick={() => deleteEixstsExpense()}
              >
                <BiSolidTrash color="#eb0c17" size={28} />
              </DeleteButton>
            }
          >
            {close => (
              <ConfirmationContainer>
                <ConfirmCard>
                  <ConfirmMessage>
                    Are you sure, you want to delete this Expense?
                  </ConfirmMessage>
                  <ButtonContainer>
                    <ButtonCancel type="button" onClick={() => close()}>
                      NO
                    </ButtonCancel>
                    <ButtonConfirm
                      type="button"
                      onClick={() => deleteEixstsExpense(id)}
                    >
                      Yes, Delete
                    </ButtonConfirm>
                  </ButtonContainer>
                </ConfirmCard>
              </ConfirmationContainer>
            )}
          </Popup>
        </EditDeleteContainer>
      </ExpenseItemSmall>

      <ExpenseItemLarge>
        <NameColumnData>
          <NameText>{name}</NameText>
        </NameColumnData>

        <CategoryColumnData>
          <CategoryText>{category}</CategoryText>
        </CategoryColumnData>

        <DateColumData>
          <DateText>{expenseDate}</DateText>
        </DateColumData>

        <AmountColumnData>
          <AmountText>INR {expenseAmount}</AmountText>
        </AmountColumnData>

        <PubhlishedColumnData>
          <PubhlishedText>{postedAt} ago</PubhlishedText>
        </PubhlishedColumnData>

        <ExpenseCreaterData>
          <ExpenseCreaterText>{expenseCreator}</ExpenseCreaterText>
        </ExpenseCreaterData>

        <EditDeleteContainer>
          <EditButton
            type="button"
            aria-label="Edit Button"
            onClick={handleMethod}
          >
            <HiPencil size={24} />
          </EditButton>
          <Popup modal className="popup-content" open={isOpen}>
            <EditExpense
              close={handleCloseModal}
              editData={editData}
              updateExpenseObject={updateExpenseObject}
            />
          </Popup>
          <Popup
            modal
            className="popup-confirmation"
            trigger={
              <DeleteButton
                type="button"
                aria-label="Delete Button"
                onClick={() => deleteEixstsExpense()}
              >
                <BiSolidTrash color="#eb0c17" size={24} />
              </DeleteButton>
            }
          >
            {close => (
              <ConfirmationContainer>
                <ConfirmCard>
                  <ConfirmMessage>
                    Are you sure, you want to delete this Expense?
                  </ConfirmMessage>
                  <ButtonContainer>
                    <ButtonCancel type="button" onClick={() => close()}>
                      NO
                    </ButtonCancel>
                    <ButtonConfirm
                      type="button"
                      onClick={() => deleteEixstsExpense(id)}
                    >
                      Yes, Delete
                    </ButtonConfirm>
                  </ButtonContainer>
                </ConfirmCard>
              </ConfirmationContainer>
            )}
          </Popup>
        </EditDeleteContainer>
      </ExpenseItemLarge>
    </ExpenseRowItem>
  )
}
export default ExpenseRow
