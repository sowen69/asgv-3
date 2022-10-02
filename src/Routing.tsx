import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CgiInfo from './pages/CGI';
import SpinsInfo from './pages/Spins';
import PhotographyInfo from './pages/Photography';
import DapInfo from './pages/Dap';
import DesignInfo from './pages/Design';
import AboutInfo from './pages/About';

function Routing() {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/cgi" element={<CgiInfo />} />
      <Route path="/dap" element={<DapInfo />} />
      <Route path="/spins" element={<SpinsInfo />} />
      <Route path="/photography" element={<PhotographyInfo />} />
      <Route path="/design" element={<DesignInfo />} />
      <Route path="/about" element={<AboutInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
