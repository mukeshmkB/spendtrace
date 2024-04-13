import {useState} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {IoMdAdd} from 'react-icons/io'
import {MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ExpenseTable from '../ExpenseTable'
import CreateExpense from '../CreateExpense'

import {
  ExpenseContainer,
  ResponsiveContainer,
  TopSearchSection,
  SectionHeading,
  RowFilterContainer,
  SearchInputField,
  NameInputField,
  NewExpenseButton,
  NewExpenseText,
  PaginationContainer,
  PaginationList,
  PaginationItem,
  PaginationControlButton,
} from './styledComponent'

import './index.css'

const expenseData = [
  {
    id: 1,
    name: 'Book',
    description: 'Weekly purchasing Book',
    category: 'Education',
    expenseDate: '2024-04-05',
    publishedAt: '2024-04-06T15:30:00',
    expenseCreator: 'me',
    expenseAmount: 650,
  },
  {
    id: 2,
    name: 'E-Bill',
    description: 'Monthly electricity bill',
    category: 'Utilities',
    expenseDate: '2024-04-07',
    publishedAt: '2024-04-05T10:45:00',
    expenseCreator: 'Jane Smith',
    expenseAmount: 1500,
  },
  {
    id: 3,
    name: 'Speaker',
    description: 'Speaker for listening music',
    category: 'Electronics',
    expenseDate: '2024-04-07',
    publishedAt: '2024-04-04T18:20:00',
    expenseCreator: 'Alice Johnson',
    expenseAmount: 2500,
  },
  {
    id: 4,
    name: 'Park',
    description: 'Monthly Fee',
    category: 'Health',
    expenseDate: '2024-04-08',
    publishedAt: '2024-04-03T20:00:00',
    expenseCreator: 'Michael',
    expenseAmount: 200,
  },
  {
    id: 5,
    name: 'Bus Fare',
    description: 'Bengaluru for interview',
    category: 'Travel',
    expenseDate: '2024-04-09',
    publishedAt: '2024-04-02T12:00:00',
    expenseCreator: 'Me',
    expenseAmount: 1450,
  },
  {
    id: 6,
    name: 'Fees',
    description: 'Mid term fee for brother',
    category: 'Education',
    expenseDate: '2024-04-11',
    publishedAt: '2024-04-10T12:00:00',
    expenseCreator: 'Smith M',
    expenseAmount: 200000,
  },
]

const paginationList = [
  {id: 1, pageNumber: 1},
  {id: 2, pageNumber: 2},
  {id: 3, pageNumber: 3},
  {id: 4, pageNumber: 4},
  {id: 5, pageNumber: 5},
]

const ExpenseManager = () => {
  const [editData, setEditData] = useState({})
  const [expenseList, setExpenseList] = useState(expenseData)
  const [searchDate, setSearchDate] = useState('')
  const [searchName, setSearchName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const updateExistsExpense = id => {
    const editExpense = expenseList.find(eachexpense => eachexpense.id === id)
    setEditData(editExpense)
  }

  const updateExpenseObject = updateData => {
    setExpenseList(prevExpense =>
      prevExpense.map(eachExpense => {
        if (eachExpense.id === updateData.id) {
          return {...eachExpense, ...updateData}
        }
        return eachExpense
      }),
    )
  }
  const addExpenseRow = newExpense => {
    setExpenseList(prevExpense => [...prevExpense, newExpense])
  }

  const deleteEixstsExpense = id => {
    const filterExpense = expenseList.filter(eachItem => eachItem.id !== id)
    setExpenseList(filterExpense)
  }

  const nextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1)
    }
  }
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const displayItems = () => {
    const itemsPerPage = 5
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedItems = expenseList.slice(startIndex, endIndex)

    const searchNamLowerCase = searchName.toLowerCase()

    const filterItem = paginatedItems.filter(
      eachItem =>
        eachItem.expenseDate.includes(searchDate) &&
        eachItem.name.toLowerCase().includes(searchNamLowerCase),
    )

    return filterItem
  }

  const accessToken = Cookies.get('jwtToken')
  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  const filteredExpenseList = displayItems()

  return (
    <ExpenseContainer>
      <ResponsiveContainer>
        <TopSearchSection>
          <SectionHeading>My Expense Manager</SectionHeading>
          <RowFilterContainer>
            <SearchInputField
              type="search"
              placeholder="Filter by Date of Expense"
              value={searchDate}
              onChange={e => setSearchDate(e.target.value)}
            />
            <NameInputField
              type="text"
              placeholder="Search Expense by Name"
              value={searchName}
              onChange={e => setSearchName(e.target.value)}
            />
            <Popup
              modal
              trigger={
                <NewExpenseButton type="button" aria-label="New Expense Button">
                  <IoMdAdd color="#ffffff" size={18} />
                  <NewExpenseText>New Expense</NewExpenseText>
                </NewExpenseButton>
              }
              className="popup-content"
            >
              {close => (
                <CreateExpense close={close} addExpenseRow={addExpenseRow} />
              )}
            </Popup>
          </RowFilterContainer>
        </TopSearchSection>
        <ExpenseTable
          editData={editData}
          updateExpenseObject={updateExpenseObject}
          updateExistsExpense={updateExistsExpense}
          deleteEixstsExpense={deleteEixstsExpense}
          expenseList={filteredExpenseList}
        />
        <PaginationContainer>
          <PaginationControlButton type="button" onClick={previousPage}>
            <MdKeyboardArrowLeft />
          </PaginationControlButton>

          <PaginationList>
            {paginationList.map(eachPage => (
              <PaginationItem
                key={eachPage.pageNumber}
                isactive={eachPage.pageNumber === currentPage}
              >
                {eachPage.pageNumber}
              </PaginationItem>
            ))}
          </PaginationList>
          <PaginationControlButton type="button" onClick={nextPage}>
            <MdOutlineKeyboardArrowRight />
          </PaginationControlButton>
        </PaginationContainer>
      </ResponsiveContainer>
    </ExpenseContainer>
  )
}
export default ExpenseManager
