import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './components/Home';
import Classes from './components/Classes';
import Coaches from './components/Coach';
import AdminClasses from './components/AdminClasses';
import AdminCoaches from './components/AdminCoaches';
import AdminUsers from './components/AdminUsers';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import CalorieCalculator from './components/CalorieCalculator'; // Import the CalorieCalculator component
import './App.css';
 

const App = () => {

  return (
    <Router>
      <div className="app">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/classes"
              element={
                <PrivateRoute>
                  <Classes />
                </PrivateRoute>
              } 
            />
      
            <Route 
              path="/calorie-calculator"
              element={
                <PrivateRoute>
                  <CalorieCalculator />
                </PrivateRoute>
              } 
            />

              <Route 
              path="/coaches"
              element={
                <PrivateRoute>
                  <Coaches />
                </PrivateRoute>
              } 
            />

              <Route 
              path="/admin-classes"
              element={
                <PrivateRoute>
                  <AdminClasses />
                </PrivateRoute>
              } 
            />

<Route 
              path="/admin-coaches"
              element={
                <PrivateRoute>
                  <AdminCoaches />
                </PrivateRoute>
              } 
            />

<Route 
              path="/admin-users"
              element={
                <PrivateRoute>
                  <AdminUsers />
                </PrivateRoute>
              } 
            />
            {/* Add more private routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
