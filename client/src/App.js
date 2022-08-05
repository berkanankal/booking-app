import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Header from './components/Header';
import HeaderSection from './components/HeaderSection';

function App() {
  return (
    <>
      <div className="bg-blue-900">
        <Header />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </>
    
  );
}

export default App;