import { BrowserRouter as Router ,Route }  from 'react-router-dom';
import NavBar from './components/Layout/Navbar';
function App() {
  return (
   <Router>
     <div className="flex flex-col justify-between h-screen">
     <NavBar />
     <main>content</main>
     </div>

   </Router>
  );
}

export default App;
