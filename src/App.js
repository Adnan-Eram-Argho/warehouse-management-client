
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
