import styled from 'styled-components'

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginCard = styled.div`
  box-shadow: 0px 0px 5px #dbd9d9;
  padding: 20px;
  padding-top: 30px;
  border-radius: 6px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AppLogoText = styled.h1`
  margin: 0px;
  font-size: 40px;
  font-weight: 600;
  color: rgb(96, 95, 95);
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
`

const AppLogo = styled.p`
  background-color: #76bbee;
  color: #ffffff;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: Fantasy;
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  margin-left: 10px;
  letter-spacing: 4px;
`

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const FormContainer = styled.form`
  border-radius: 6px;
  width: 350px;
  margin-top: 20px;
`

const InputLabel = styled.label`
  font-family: 'roboto';
  color: #475569;
  font-size: 18px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

const NameInputField = styled.input`
  padding: 14px;
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: Roboto;
  font-size: 17px;
  font-weight: 450;
  color: #313131;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
const PasswordInputField = styled(NameInputField)``

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  color: #ffffff;
  background-color: #76bbee;
  margin-top: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
`

const ErrorMessage = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #ef0f0f;
  margin-top: 10px;
`

export {
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
}
