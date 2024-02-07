import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CardSection from './components/Products/Card/CardSection';
import Footer from './components/Footer/Footer';
import ListaSabores from './components/ExtraComponents/MostrarSabores';
import ContactForm from './components/ContactForm/ContactForm';
import PedidoPage from './components/Pages/Pedidos/PedidoPage';
import LoginPage from './components/Pages/Login/Login'
import RegisterPage from './components/Pages/Registro/Registro'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><CardSection /><ListaSabores /><ContactForm /></>} />
        <Route path="/PedidoPage" element={<PedidoPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registro" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
