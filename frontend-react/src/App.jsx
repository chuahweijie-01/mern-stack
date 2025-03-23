import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
