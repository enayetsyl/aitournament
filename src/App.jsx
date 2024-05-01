import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Teams from './pages/Teams';
import Tournament from './pages/Tournament';
import Standing from './pages/Standing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tournament />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/standing" element={<Standing />} />
      </Routes>
    </Router>
  );
}

export default App;
