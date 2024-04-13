import {useState} from 'react'

import {v4 as uuidV4} from 'uuid'

import {
  AddExpenseContainer,
  AddExpenseResponsive,
  CreateExpenseImage,
  FormHeading,
  CreateExpenseCard,
  FormContainer,
  NameInputContainer,
  DescriptionInputContainer,
  DateInputContainer,
  AmountInputContainer,
  CategoryInputContainer,
  AmountCreaterInputContainer,
  NameInputLabel,
  DescriptionLabel,
  NameInputField,
  DescriptionInputField,
  DateInputFiled,
  AmountInputField,
  AmountCreaterInputField,
  CategoryInputField,
  CategoryLabel,
  DateLabel,
  AmountLabel,
  AmountCreaterLabel,
  CreateCancelContainer,
  ButtonCreate,
  ButtonCancel,
} from './styledComponents'

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

const CreateExpense = props => {
  const {close, addExpenseRow} = props

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    expenseDate: '',
    expenseAmount: '',
    expenseCreator: '',
  })

  const handleChange = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const addExpense = event => {
    event.preventDefault()

    const {
      name,
      description,
      category,
      expenseDate,
      expenseAmount,
      expenseCreator,
    } = formData

    const newExpense = {
      id: uuidV4(),
      name,
      description,
      category,
      expenseDate,
      publishedAt: new Date(),
      expenseCreator,
      expenseAmount,
    }

    addExpenseRow(newExpense)
    console.log(newExpense)
    close()
  }

  return (
    <AddExpenseContainer>
      <AddExpenseResponsive>
        <CreateExpenseImage
          src="https://i.ibb.co/41RLWBk/hand-drawn-flat-design-kanban-illustration-23-2149331620.jpg"
          alt="create Expense Image"
        />
        <CreateExpenseCard>
          <FormHeading>Create New Expense</FormHeading>
          <FormContainer onSubmit={addExpense}>
            <NameInputContainer>
              <NameInputLabel htmlFor="name">Name</NameInputLabel>
              <NameInputField
                type="text"
                name="name"
                value={formData.name}
                id="name"
                onChange={handleChange}
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
                value={formData.description}
                id="description"
                onChange={handleChange}
              />
            </DescriptionInputContainer>

            <CategoryInputContainer>
              <CategoryLabel htmlFor="category">Category</CategoryLabel>
              <CategoryInputField
                name="category"
                value={formData.category}
                id="category"
                onChange={handleChange}
              >
                {' '}
                {categories.map(eachCategory => (
                  <option
                    key={eachCategory.id}
                    value={eachCategory.displayText}
                    onChange={handleChange}
                  >
                    {eachCategory.displayText}
                  </option>
                ))}
              </CategoryInputField>
            </CategoryInputContainer>

            <DateInputContainer>
              <DateLabel htmlFor="date">Date Of Expense</DateLabel>
              <DateInputFiled
                type="date"
                name="expenseDate"
                value={formData.expenseDate}
                id="date"
                className="create-input"
                onChange={handleChange}
              />
            </DateInputContainer>

            <AmountInputContainer>
              <AmountLabel htmlFor="amount">Expense Amount</AmountLabel>
              <AmountInputField
                type="text"
                name="expenseAmount"
                id="amount"
                className="Expense-amount create-input"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </AmountCreaterInputContainer>

            <CreateCancelContainer>
              <ButtonCancel
                onClick={() => {
                  close()
                }}
              >
                Cancel
              </ButtonCancel>
              <ButtonCreate type="submit">Create Expense</ButtonCreate>
            </CreateCancelContainer>
          </FormContainer>
        </CreateExpenseCard>
      </AddExpenseResponsive>
    </AddExpenseContainer>
  )
}

export default CreateExpense
