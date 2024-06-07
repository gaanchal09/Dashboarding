import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <main className="main-content">
                    <Header />
                    <div style={{ paddingTop: '64px' }}> {/* Adjust this padding based on header height */}
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/tables" element={<Tables />} />
                            <Route path="/charts" element={<Charts />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/kanban" element={<Kanban />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default App;
