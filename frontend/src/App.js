import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {AuthProvider} from './context/AuthContext';

import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Router>
      <AuthProvider>
      <div className="container dark">
        <div className="app">
            <Header /> 
              <PrivateRoute path="/login" Component= {LoginPage} />
              <PrivateRoute path="/note/:id" Component = {NotePage} />
              <PrivateRoute path="/" Component={NotesListPage} />
              <Routes>
              <Route path="/reg" Component={RegisterPage} />
              </Routes>
        </div>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
