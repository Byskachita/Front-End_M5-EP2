import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Appointment from './pages/Appointment.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.tsx';
import { PAGES } from './utils/constants.ts';
import Footer from './components/Footer.tsx';
import Contact from './pages/Contact.tsx';
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import PrivateRouter from './components/PrivateRouter.tsx';
import { AuthProvider } from './context/AuthProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={PAGES.HOME} element={<Home />} />
      <Route path={PAGES.ABOUT} element={<About />} />
      <Route path={PAGES.APPOINTMENT} element={<Appointment />} />
      <Route path={PAGES.CONTACT} element={<Contact />} />
      <Route path={PAGES.LOGIN} element={<Login />} /> {/* Nueva ruta */}
      <Route
      path={PAGES.DASHBOARD}
      element={
      <PrivateRouter>
        <Dashboard />
        </PrivateRouter>
      } 
      />
    </Routes>
    <Footer />
  </BrowserRouter>
  </AuthProvider>
);
