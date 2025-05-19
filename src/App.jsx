import Home from './screens/home/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:storeCode?" element={<Home />} />

        <Route path="/hello" element={<div>Hello World</div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;