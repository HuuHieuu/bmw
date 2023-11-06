import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import TrangChu from './pages/TrangChu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<TemporaryDrawer />} /> */}
          <Route path="/" element={<TrangChu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
