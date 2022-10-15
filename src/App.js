import Releases from './pages/Releases';
import News from './pages/News';
import History from './pages/History';
import Contact from './pages/Contact';
import SharedLayout from './components/SharedLayout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Releases />}/>
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
}

export default App;
