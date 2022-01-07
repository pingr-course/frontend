import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './components/pages/Home'
import Account from './components/pages/Account'
import Accounts from './components/pages/Accounts'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/:id" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
