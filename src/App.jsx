import Home from './screens/home/Home';
import Footer from './components/Footer';
import Hello from './screens/hello/Hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrintQrCode from './screens/printQrCode/PrintQrCode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:storeCodeParam?" element={<Home />} />

        <Route path="/hello/:storeCodeParam" element={<Hello />} />

        <Route path="/printQrCode/:storeCodeParam" element={<PrintQrCode />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;