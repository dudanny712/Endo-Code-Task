
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hello from './pages/Helloworld/index';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/helloworld' element={<Hello/>}/>
          <Route path='/helloworld' element={<Hello/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
