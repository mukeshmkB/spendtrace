import {useState} from 'react'

import {
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
  CreateCancelContainer,
  ButtonCreate,
  ButtonCancel,
  EditExpenseImage,
} from './styledComponent'

const categories = [
  {id: 1, value: 'TRAVEL', displayText: 'Travel'},
  {id: 2, value: 'FOOD', displayText: 'Food'},
  {id: 3, value: 'HOUSING', displayText: 'Housing'},
  {id: 4, value: 'ENTERTAINMENT', displayText: 'Entertainment'},
  {id: 5, value: 'EDUCATION', displayText: 'Education'},
  {id: 6, value: 'HEALTH', displayText: 'Health'},
  {id: 7, value: 'ELECTRONICS', displayText: 'Electronics'},
  {id: 8, value: 'OTHERS', displayText: 'Others'},
]
const EditExpense = props => {
  const {close, editData, updateExpenseObject} = props

  const {
    id,
    name,
    description,
    category,
    expenseDate,
    expenseCreator,
    expenseAmount,
  } = editData

  const [updateData, setUpdateData] = useState({
    id,
    name,
    description,
    category,
    expenseDate,
    expenseCreator,
    expenseAmount,
  })

  const transformInput = event => {
    const {value} = event.target
    setUpdateData({...updateData, [event.target.name]: value})
  }

  const submitUpdateData = event => {
    event.preventDefault()
    updateExpenseObject(updateData)
    close()
  }

  return (
    <EditExpenseContainer>
      <EditExpenseResponsive>
        <EditExpenseCard>
          <FormHeading>Edit Expense</FormHeading>

          <FormContainer onSubmit={submitUpdateData}>
            <NameInputContainer>
              <NameLabel htmlFor="name">Name</NameLabel>
              <NameInputField
                type="text"
                name="name"
                value={updateData.name}
                id="name"
                onChange={transformInput}
              />
            </NameInputContainer>

            <DescriptionInputContainer>
              <DescriptionLabel htmlFor="description">
                {' '}
                Description{' '}
              </DescriptionLabel>
              <DescriptionInputField
                type="text"
                name="description"
                value={updateData.description}
                id="description"
                onChange={transformInput}
              />
            </DescriptionInputContainer>

            <CategoryInputContainer>
              <CategoryLabel htmlFor="category">Category</CategoryLabel>
              <CategoryInputField
                name="category"
                value={updateData.category}
                id="category"
                onChange={transformInput}
              >
                {' '}
                {categories.map(eachCategory => (
                  <option
                    key={eachCategory.id}
                    value={eachCategory.displayText}
                    onChange={transformInput}
                  >
                    {eachCategory.displayText}
                  </option>
                ))}
              </CategoryInputField>
            </CategoryInputContainer>

            <DateInputContainer>
              <DateLabel htmlFor="date">Date Of Expense</DateLabel>
              <DateInputField
                type="date"
                name="expenseDate"
                value={updateData.expenseDate}
                id="date"
                className="edit-input"
                onChange={transformInput}
              />
            </DateInputContainer>

            <AmountInputContainer>
              <AmountLabel htmlFor="amount">Expense Amount</AmountLabel>
              <AmountInputField
                type="text"
                name="expenseAmount"
                id="amount"
                value={updateData.expenseAmount}
                className="Expense-amount edit-input"
                onChange={transformInput}
              />
            </AmountInputContainer>

            <AmountCreaterInputContainer>
              <AmountCreaterLabel htmlFor="creator">
                Amount Creater
              </AmountCreaterLabel>
              <AmountCreaterInputField
                type="text"
                name="expenseCreator"
                id="creator"
                value={updateData.expenseCreator}
                onChange={transformInput}
              />
            </AmountCreaterInputContainer>

            <CreateCancelContainer>
              <ButtonCancel
                className="edit-button-cancel"
                onClick={() => {
                  close()
                }}
              >
                Cancel
              </ButtonCancel>
              <ButtonCreate type="submit">Create Expense</ButtonCreate>
            </CreateCancelContainer>
          </FormContainer>
        </EditExpenseCard>
        <EditExpenseImage
          src="https://i.ibb.co/Cwpp0cw/fill-out-concept-illustration-114360-5450.jpg"
          alt="Edit Expense Image"
        />
      </EditExpenseResponsive>
    </EditExpenseContainer>
  )
}

export default EditExpense
