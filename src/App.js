 import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
 
import ModernNavbar from './components/ModernNavbar';
import ModernHeader from './components/ModernHeader';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ModernNavbar />
        <Routes>
          <Route exact path='/' element={<ModernHeader />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;