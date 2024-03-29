import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';
// import { ThemeProvider, theme } from '@chakra-ui/core';
import { ChakraProvider } from '@chakra-ui/react'




function App() {
  return (
    <ChakraProvider>
    <div className="App">
      {/* <FormikContainer/> */}
      {/* <LoginForm/> */}
      {/* <RegistrationForm/> */}
      <EnrollmentForm/>
    </div>
    </ChakraProvider>
  );
}

export default App;
