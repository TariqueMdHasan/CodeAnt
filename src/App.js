import './App.css';
import Landing from './components/Landing';
import LargeScreen from './components/LargeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/main' element={<LargeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;