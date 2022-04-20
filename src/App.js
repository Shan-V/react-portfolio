import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContractPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import ResumePage from './pages/ResumePage';
import './App.css';

function App() {
  /* cSpell:disable */
  const myName = 'Abirami.Theepan';
  return (
    <div className='flex flex-col app bg-body text-white font-poppins min-h-screen'>
      <Router>
        <>
          <Header myName={myName} />
        </>

        <Routes>
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/contact' element={<ContractPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
        <>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
