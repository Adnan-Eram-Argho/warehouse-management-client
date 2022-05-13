
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
import AddNewItem from './Components/AddNewItem/AddNewItem';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs'

function App() {

  //https://stackoverflow.com/questions/72232381/typeerror-cant-assign-to-property-caninitemulator-on-emailgmail-com-not
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
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}></Route>
        <Route path='/addnewitem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='myitems/:email' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
