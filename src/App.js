
import Header from './Header/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <div>
     
     <Router>
     <Header />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' exact Component={About} />
        <Route path='/services' exact Component={Services}/>
        <Route path='/contact' exact Component={Contact} />
      </Routes>
     </Router>
     
     
    </div>
  );
}

export default App;
