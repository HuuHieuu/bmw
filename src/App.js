import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import TrangChu from './pages/TrangChu';

// Details
import I7_Detail from './pages/Details/I7_Detail';
import Ix3_Detail from './pages/Details/Ix3_Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/pages/details/i7_detail" element={<I7_Detail />} />
          <Route path="/pages/details/ix3_detail" element={<Ix3_Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
