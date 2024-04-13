import ExpenseRow from '../ExpenseRow'

import {
  ExpenseListItems,
  DateColumnHeader,
  CategoryColumnHeader,
  AmountColumnHeader,
  ExpenseRowHeadersSmall,
  ExpenseRowHeadersLarge,
  NameColumnHeader,
  CreatedColumnHeader,
  UpdateColumnHeader,
  EditCancelColumnHeader,
  NameText,
  CategoryText,
  DateText,
  AmountText,
  CreateText,
  UpdateText,
} from './styledComponents'

const ExpenseTable = props => {
  const {
    updateExistsExpense,
    deleteEixstsExpense,
    editData,
    updateExpenseObject,
    expenseList,
  } = props

  const renderExpenseTable = () => (
    <>
      <ExpenseRowHeadersSmall>
        <DateColumnHeader>
          <DateText>Date</DateText>
        </DateColumnHeader>

        <CategoryColumnHeader>
          <CategoryText>Category</CategoryText>
        </CategoryColumnHeader>

        <AmountColumnHeader>
          <AmountText>Amount </AmountText>
        </AmountColumnHeader>
        <EditCancelColumnHeader />
      </ExpenseRowHeadersSmall>

      <ExpenseRowHeadersLarge>
        <NameColumnHeader>
          <NameText>Name</NameText>
        </NameColumnHeader>

        <CategoryColumnHeader>
          <CategoryText>Category</CategoryText>
        </CategoryColumnHeader>

        <DateColumnHeader>
          <DateText>Date Of Expense</DateText>
        </DateColumnHeader>

        <AmountColumnHeader>
          <AmountText>Amount </AmountText>
        </AmountColumnHeader>

        <UpdateColumnHeader>
          <UpdateText>Updated At</UpdateText>
        </UpdateColumnHeader>

        <CreatedColumnHeader>
          <CreateText>Created by</CreateText>
        </CreatedColumnHeader>
        <EditCancelColumnHeader />
      </ExpenseRowHeadersLarge>
    </>
  )

  return (
    <>
      <ExpenseListItems>
        {renderExpenseTable()}
        {expenseList.map(eachRow => (
          <ExpenseRow
            key={eachRow.id}
            eachRowDetails={eachRow}
            deleteEixstsExpense={deleteEixstsExpense}
            updateExistsExpense={updateExistsExpense}
            updateExpenseObject={updateExpenseObject}
            editData={editData}
          />
        ))}
      </ExpenseListItems>
    </>
  )
}
export default ExpenseTable
