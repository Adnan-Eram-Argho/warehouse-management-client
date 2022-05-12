
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';
import InventoryRoute from './Components/InventoryRoute/InventoryRoute';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignIn from './Components/SignIn/SignIn';
import ManageInventories from './Components/ManageInventories/ManageInventories';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='inventory/:id' element={
          <RequireAuth>
            <InventoryRoute></InventoryRoute>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
