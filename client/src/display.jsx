import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Car from './assets/images/Car.jpg';
import Bike from './assets/images/Bike.jpg';
import Truck from './assets/images/Truck.jpg';
import Van from './assets/images/Van.jpg';
import HV from './assets/images/HV.jpg';
import Yart from './assets/images/Yart.jpg';
import homeImage from './assets/images/Home.jpeg';

function Display() {
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div 
      className="App" 
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',      
        backgroundPosition: 'center',    
        backgroundAttachment: 'fixed',   
        minHeight: '100vh',              
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <header>
        <h1 onClick={() => setShowSearch(!showSearch)}>ARAN</h1>
        {showSearch && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        )}
        <div className="profile">
          <button 
            onClick={(e) => {
              e.preventDefault();
              setShowLogin(!showLogin);
            }} 
          >
            User Profile
          </button>
        </div>
        {showLogin && (
          <div className="login-form">
            <form>
              <Link to={'/login'}>Login</Link><br />
              <Link to={'/register'}>Register</Link>
            </form>
          </div>
        )}
      </header>

      <main>
        {/* Add your main content here */}
      </main>

      <footer>
        <div className="car-images">
          <img 
            src={Car} 
            alt="Car" 
          />
          <img 
            src={Bike} 
            alt="Bike" 
          />
          <img 
            src={Truck} 
            alt="Truck" 
          />
          <img 
            src={Van}
            alt="Van" 
          />
          <img 
            src={HV}
            alt="Truck" 
          />
          <img 
            src={Yart}
            alt="Yart" 
          />
        </div>
        <p>&copy; 2024 My Web Page</p>
      </footer>
    </div>
  );
}

export default Display;
