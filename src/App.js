import logo from './logo.svg';
import './App.css';
import Index from './components/screens/Index';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Home from './components/screens/Home';
import Show from './components/screens/Show';
import Movies from './components/screens/Movies';
import NewPopular from './components/screens/NewPopular';
import Mylist from './components/screens/Mylist';
import BrowsebyLanguage from './components/screens/BrowsebyLanguage';
import LandingPage from './components/screens/LandingPage';
import LandingPageHeader from './components/includes/LandingPageHeader';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Navigate replace={true} to={"landing"} />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/show" element={<Show />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/new-popular" element={<NewPopular />} />
            <Route path="/my-list" element={<Mylist />} />
            <Route path="/browse-by-launguage" element={<BrowsebyLanguage />} />
            <Route path="/landing" element={<LandingPage />} />
        </Routes>
    </Router>
  );
}

export default App;
