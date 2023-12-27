import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import TrangChu from './pages/TrangChu';

//contact
import CONTACT from './pages/Contact';
import MAUXE from './pages/MauXe';

// Details
import I7_DETAIL from './pages/Details/I7_Detail';
import IX3_DETAIL from './pages/Details/Ix3_Detail';
import I4_DETAIL from './pages/Details/I4_Detail';
import X3_DETAIL from './pages/Details/X3_Detail';
import X4_DETAIL from './pages/Details/X4_Detail';
import X5_DETAIL from './pages/Details/X5_Detail';
import X6_DETAIL from './pages/Details/X6_Detail';
import X7_DETAIL from './pages/Details/X7_Detail';
import BMW3SERIES from './pages/Details/3SeriesDetail';
import BMW4SERIESMUITRAN from './pages/Details/4MuiTranDetail';
import BMW4GRAN from './pages/Details/4Gran';
import BMW5SERIES from './pages/Details/5Series';
import BMW7SERIES from './pages/Details/7SeriesDetail';
import BMW8SERIES from './pages/Details/8SeriesDetail';
import Z4SERIES from './pages/Details/Z4Detail';
import XMDetail from './pages/Details/XMDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/pages/details/i7_detail" element={<I7_DETAIL />} />
          <Route path="/pages/details/ix3_detail" element={<IX3_DETAIL />} />
          <Route path="/pages/details/i4_detail" element={<I4_DETAIL />} />
          <Route path="/pages/details/x3_detail" element={<X3_DETAIL />} />
          <Route path="/pages/details/x4_detail" element={<X4_DETAIL />} />
          <Route path="/pages/details/x5_detail" element={<X5_DETAIL />} />
          <Route path="/pages/details/x6_detail" element={<X6_DETAIL />} />
          <Route path="/pages/details/x7_detail" element={<X7_DETAIL />} />
          <Route path="/pages/details/3_series" element={<BMW3SERIES />} />
          <Route path="/pages/details/4_series_mui_tran" element={<BMW4SERIESMUITRAN />} />
          <Route path="/pages/details/4_series_gran_coupé" element={<BMW4GRAN />} />
          <Route path="/pages/details/5_series" element={<BMW5SERIES />} />
          <Route path="/pages/details/7_series" element={<BMW7SERIES />} />
          <Route path="/pages/details/8_series" element={<BMW8SERIES />} />
          <Route path="/pages/details/z4" element={<Z4SERIES />} />
          <Route path="/pages/details/XM" element={<XMDetail />} />
          <Route path="/pages/contact" element={<CONTACT />} />
          <Route path="/pages/mau-xe" element={<MAUXE />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
