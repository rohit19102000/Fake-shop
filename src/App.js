import { BrowserRouter as Router ,Route , Routes,  }  from 'react-router-dom';
import { useState  }  from 'react';
import NavBar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';


function App() {
const [details,setDetails] = useState({});
const getDetails = (product) => {
  setDetails(product);
}
  return (
   <Router>
     <div className="flex flex-col justify-between h-screen">
     <NavBar />
     <main className="container mx-auto px-3 pb-12">
       <Routes>
         <Route path="/" element={<Home getDetails={getDetails} />} />
         <Route path="/about" element={<About />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/details" element={<Details  details={details} />} />

       </Routes>
     </main>
     <Footer/>
     </div>

   </Router>
  );
}

export default App;
