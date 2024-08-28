import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/welcome' element={<Welcome/>}></Route>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
