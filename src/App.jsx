import styles from './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Navbar from './components/Navbar/Navbar';
import BottomNavbar from './components/BottomNav/BottomNavbar';
import { useState } from 'react';


function App() {

  const [showTopNavbar, setShowTopNavbar] = useState(true);
  const handleMenuClick = (menu) => {
    
    setShowTopNavbar(false);
    window.history.pushState(null, '', `/${menu}`);
    
  };
  return (
    <div className="App">
      <div className="container">
      <div className="side-space"></div> {/* Left side space */}
      <div className="content">
      <BrowserRouter>
      {showTopNavbar && <Navbar />}
                  <Routes>
                      {routes.map((route, i) => (
                          <Route
                              key={i}
                              path={route.path}
                              Component={route.Component}
                          />
                      ))}
                  </Routes>
                  <BottomNavbar handleMenuClick={handleMenuClick} /> 
            </BrowserRouter>
                        
      </div>
      <div className="side-space"></div> {/* Right side space */}
    </div>
    </div>
  );
}

export default App;
