import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddInfo from './AddInfo';
import Records from './Records';
import './App.css'; // Main styling for the app

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Hostel Management</h1>
          <nav>
            <ul>
              <li>
                <Link to="/add-info">Add Info</Link>
              </li>
              <li>
                <Link to="/records">Records</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/add-info" element={<AddInfo />} />
            <Route path="/records" element={<Records />} />
            <Route path="/" element={<AddInfo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
