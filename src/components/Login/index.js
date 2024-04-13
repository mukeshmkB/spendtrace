import {useState} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  AppLogoText,
  AppLogo,
  InputFieldContainer,
  FormContainer,
  InputLabel,
  NameInputField,
  PasswordInputField,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

const Login = props => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [error, setError] = useState({showErr: false, errMsg: ''})

  const validateSucess = () => {
    const jwtToken = 'jwt_token_021'
    Cookies.set('jwtToken', jwtToken)

    const {history} = props
    history.replace('/')
  }

  const submitCredentials = event => {
    event.preventDefault()

    if (userEmail !== 'mukesh246@gmail.com') {
      setError(prevError => ({
        ...prevError,
        showErr: true,
        errMsg: 'Enter the valid email',
      }))
      return
    }
    if (userPassword !== 'Mukesh03') {
      setError(prevError => ({
        ...prevError,
        showErr: true,
        errMsg: 'Enter the valid password',
      }))
      return
    }

    validateSucess()
  }

  const accessToken = Cookies.get('jwtToken')

  if (accessToken !== undefined) {
    return <Redirect to="/" />
  }

  const {showErr, errMsg} = error

  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <AppLogoText>Spend</AppLogoText>
          <AppLogo> Track</AppLogo>
        </LogoContainer>
        <FormContainer onSubmit={submitCredentials}>
          <InputFieldContainer>
            <InputLabel>Email</InputLabel>
            <NameInputField
              type="email"
              placeholder="Enter Your Email"
              value={userEmail}
              onChange={event => {
                setUserEmail(event.target.value)
              }}
            />
          </InputFieldContainer>

          <InputFieldContainer>
            <InputLabel>Password</InputLabel>
            <PasswordInputField
              type="password"
              placeholder="Enter Your Password"
              value={userPassword}
              onChange={event => {
                setUserPassword(event.target.value)
              }}
            />
          </InputFieldContainer>

          <LoginButton type="submit">Login</LoginButton>
          {showErr ? <ErrorMessage>* {errMsg}</ErrorMessage> : null}
        </FormContainer>
      </LoginCard>
    </LoginContainer>
  )
}
export default Login
