import './App.css'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './Components/services/Services'
import Contact from './Components/contact/Contact'

function App() {


  return (
    <div>
      <Router>
      <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact-Us' element={<Contact />} />
          </Routes>
        </div>
      <Footer />
      </Router>
    </div>
  )
}

export default App
