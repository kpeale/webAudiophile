import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<IndexPage />}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/headphones'
            element={<Headphones />}
          />
          <Route
            path='/speakers'
            element={<Speakers />}
          />
          <Route
            path='/earphones'
            element={<Earphones />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
