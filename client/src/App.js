import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Soldier from './pages/Soldier';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Soldier/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
