import {BroweserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BroweserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </BroweserRouter>
  );
}

export default App;
