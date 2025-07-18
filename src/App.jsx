import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Translator from './pages/Translator';
import Generator from './pages/Generator';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster/>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
