import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home.js';
import CreateUser from './component/CreateUser.js';
import ListUser from './component/ListUser.js';
import UserUpdate from './component/UserUpdate.js';
import UserDelete from './component/UserDelete.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/create' element = {<CreateUser/>} />
          <Route path = '/list' element = {<ListUser/>} />
          <Route path='/update/:userId' element={<UserUpdate/>} />
          <Route path='/delete/:userId' element={<UserDelete/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
