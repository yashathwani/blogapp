import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import { UserContextProvider } from './components/UserContext';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import Posts from './components/Posts'
import BlogPostForm from "./components/BlogPostForm";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/createPost' element ={<BlogPostForm/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
