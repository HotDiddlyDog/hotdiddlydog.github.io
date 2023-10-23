import Home from "./pages/Home.js"
import Start from "./pages/Start.js"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
