import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import { UserContextProvider } from './components/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<RegisterForm />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
