import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </>
  );
}

export default App;
