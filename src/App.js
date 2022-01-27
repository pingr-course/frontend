import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home'
import Profiles from './components/pages/Profiles'
import AProfile from './components/pages/AProfile'


function App() {
  return (
    <Router>
      <div className="App">
        <p>aqui fica fixo</p>
        <Routes>
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:id" element={<AProfile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
