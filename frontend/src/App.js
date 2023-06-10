import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Routes>
    <Route path='/' exact Component={NotesListPage} />
    <Route path= 'note/:id' Component={NotePage} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;