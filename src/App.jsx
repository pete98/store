import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Food from './pages/Food';
import Drink from './pages/Drink';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MoneyTransfer from './pages/MoneyTransfer';
import CasinoBusServices from './pages/CasinoBusServices';
import NewJerseyLottery from './pages/NewJerseyLottery';
import Navbar from './components/Navbar.jsx'
import Bills from './pages/bills.jsx';
import GiftCard from './pages/giftCard.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path='/bills' element={<Bills />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/services" element={<Services />} />
        <Route path='/giftCard' element={<GiftCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/money-transfer" element={<MoneyTransfer />} />
        <Route path="/casino-bus-services" element={<CasinoBusServices />} />
        <Route path="/new-jersey-lottery" element={<NewJerseyLottery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;