import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import ExpenseManager from './components/ExpenseManager'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={ExpenseManager} />
  </Switch>
)

export default App
