import HeaderNav from './components/HeaderNav';
import Releases from './components/Releases';
import Footer from './components/Footer';
import News from './components/News';
import History from './components/History';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
  <Router>
    <HeaderNav />
    <Routes>
      <Route path="/" element={<Releases />} />
      <Route path="/news" element={<News />} />
      <Route path="/history" element={<History />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);
}

export default App;
