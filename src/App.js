import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Home/Notfound/Notfound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
