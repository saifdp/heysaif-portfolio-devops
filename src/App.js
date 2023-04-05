 
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {

 

  return (
   
    
 
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Header />}></Route>
        {/* <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/About' element={< About />}></Route>
        
        <Route exact path='/Carrers' element={< Carrers />}></Route> */}
   
   
      </Routes>
     
    
    </Router>


  );
}

export default App;