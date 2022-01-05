import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoriteProvider } from './context/Context';
import { Favorite } from './pages/Favorite';
import { Home } from './pages/Home';
import { PageKey } from './pages/PageKey';
import { Random } from './pages/Random';

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Random />} />
          <Route path="/key" element={<PageKey />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;