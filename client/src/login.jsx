import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import homeImage from './assets/images/Home.jpeg'

function Login() {

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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ padding: '20px', borderRadius: '5px' }}>
                <h1 style={{ textAlign: 'center' }}>ARAN</h1>
                <h3 style={{ textAlign: 'center', color: 'yellowgreen' }}>Login</h3>
                <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                   <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{ padding: '10px 20px', borderRadius: '3px', border: 'none', backgroundColor: '#287745', color: 'white', cursor: 'pointer' }}
                >
                    Login
                </button>
                <h6>Doesn't have an account?</h6>
                <Link 
                    to="/register" 
                    style={{ padding: '10px 20px', borderRadius: '3px', border: 'none', backgroundColor: '#007bbb', color: 'white', cursor: 'pointer' }}
                >
                    Register
                </Link>
            </form>
        </div>
    </div>
    );
}

export default Login;
