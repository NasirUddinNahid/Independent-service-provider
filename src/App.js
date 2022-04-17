import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/CheckOut/Checkout';
import About from './Pages/Home/About/About';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Home/Notfound/Notfound';
import Login from './Pages/Home/Sign/SignIn/Login';
import Register from './Pages/Home/Sign/SignUp/Register';
import RequirdAuth from './Pages/RequirdAuth/RequirdAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequirdAuth>
          <Checkout></Checkout>
        </RequirdAuth>}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
