import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Error from './pages/Error';
import Upload from './pages/Upload';
import SpinnerWheel from './pages/SpinnerWheel';

function App() {
  return (
    <Router>
      {/* <img src='resources/home_background.jpg' /> */}
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='upload' element={<Upload />} />
          <Route path='spin' element={<SpinnerWheel />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

//<img src='resources/home_background.jpg' />