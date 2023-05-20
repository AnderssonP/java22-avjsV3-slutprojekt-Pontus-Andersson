import "../css/style.css"
import Sidebar from './sidebar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CAccount from './pages/CreateAccount';
import Login from './pages/login';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';

export default function App() {

    return (
        <HashRouter>
          <Sidebar >
          <Routes>
            <Route path='/CreateAccount' element={<CAccount/>}></Route>
            <Route path='/MyAccount' element={<MyAccount/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            </Routes>
            <Routes>
            <Route path='/ProductPage' element={<ProductPage/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
          </Sidebar>
        </HashRouter>
    );
}