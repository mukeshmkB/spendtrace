import styled from 'styled-components'

const ExpenseContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #fafcfc;
`

const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 2px solid rgb(137, 136, 136);
  border-radius: 6px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    border: 2px solid rgb(137, 136, 136);
  }
`

const TopSearchSection = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
const RowFilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
`
const SectionHeading = styled.h1`
  font-family: 'roboto';
  font-size: 22px;
  color: rgb(8, 8, 66);
`

const SearchInputField = styled.input`
  width: 100%;
  padding: 6px;
  font-family: Roboto;
  font-size: 18px;
  background-color: transparent;
  border: 2px solid rgb(137, 136, 136);
  border-radius: 4px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    width: 25%;
    font-size: 14px;
    text-align: center;
    margin-right: 15px;
    margin-bottom: 0px;
  }
`
const NameInputField = styled(SearchInputField)``

const NewExpenseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34px;
  font-family: Roboto;
  font-size: 18px;
  background-color: #2bb828;
  color: #ffffff;
  border: none;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    width: 20%;
    margin-bottom: 0px;
    font-size: 14px;
  }
`

const NewExpenseContainer = styled.div`
  margin: 0px;
`

const NewExpenseText = styled.p``

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #f5f5f5;
  border-radius: 6px;
  margin-top: 10px;
`

const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  padding: 10px;
`

const PaginationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-family: roboto;
  font-size: 13px;
  text-align: center;
  border-radius: 100%;
  border: 1px solid ${props => (props.isactive ? '#4e92e6' : '#D1D1DD')};
  background-color: ${props => (props.isactive ? '#4e92e6' : '#ffffff')};
  color: ${props => (props.isactive ? '#ffffff' : '#141414')};
  padding: 10px;
  margin-left: 4px;
  margin-right: 4px;
`

const PaginationControlButton = styled.button`
  background-color: transparent;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  text-align: center;
  border: 1px solid rgb(211, 211, 216);
  padding: 10px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: 13px;
`

export {
  ExpenseContainer,
  ResponsiveContainer,
  TopSearchSection,
  SectionHeading,
  RowFilterContainer,
  SearchInputField,
  NameInputField,
  NewExpenseText,
  NewExpenseButton,
  NewExpenseContainer,
  PaginationContainer,
  PaginationList,
  PaginationItem,
  PaginationControlButton,
}
