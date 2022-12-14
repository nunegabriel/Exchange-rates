import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Detail from './components/Coindetail';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>

  );
}

export default App;
