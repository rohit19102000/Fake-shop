import { BrowserRouter as Router ,Route , Routes }  from 'react-router-dom';
import NavBar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
function App() {
  return (
   <Router>
     <div className="flex flex-col justify-between h-screen">
     <NavBar />
     <main className="container mx-auto px-3 pb-12">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/*" element={<NotFound />} />
       </Routes>
     </main>
     <Footer/>
     </div>

   </Router>
  );
}

export default App;
