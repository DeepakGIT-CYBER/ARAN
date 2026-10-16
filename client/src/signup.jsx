import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import homeImage from './assets/images/Home.jpeg';

function Signup() {
    const [emailCount, setEmailCount] = useState(0);
    const [phoneCount, setPhoneCount] = useState(0);

    // Handle changes in email count dropdown
    const handleEmailCountChange = (e) => {
        setEmailCount(Number(e.target.value)); // Convert the value to a number
    };

    // Handle changes in phone count dropdown
    const handlePhoneCountChange = (e) => {
        setPhoneCount(Number(e.target.value)); // Convert the value to a number
    };

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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <form style={{ padding: '20px', borderRadius: '5px' }}>
                <h1 style={{textAlign : 'center'}}>ARAN</h1><br />
                <h3 style={{ textAlign: 'center', color:'yellow' }}>Sign Up </h3>
                <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            style={{ marginBottom: '10px', padding: '10px', width: '45%', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="text"
                            name="designation"
                            placeholder="Enter your designation"
                            required
                            style={{ marginBottom: '10px', padding: '10px', width: '45%', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <input
                        type="text"
                        name="companyname"
                        placeholder="Enter your Company/Yard name"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="tel"
                        name="phonenumber"
                        placeholder="Enter your mobile number"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                    />

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ fontSize: '14px' }}>How many additional emails do you want to provide?</label>
                        <select
                            style={{ padding: '8px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            value={emailCount}
                            onChange={handleEmailCountChange}
                        >
                            <option value="0">No additional emails</option>
                            <option value="1">One additional email</option>
                            <option value="2">Two additional emails</option>
                        </select>
                    </div>

                    {emailCount > 0 && (
                        <input
                            type="email"
                            name="email2"
                            placeholder="Enter additional email 1"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                    )}
                    {emailCount > 1 && (
                        <input
                            type="email"
                            name="email3"
                            placeholder="Enter additional email 2"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                    )}

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ fontSize: '14px' }}>How many additional mobile numbers do you want to provide?</label>
                        <select
                            style={{ padding: '8px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            value={phoneCount}
                            onChange={handlePhoneCountChange}  
                        >
                            <option value="0">No additional numbers</option>
                            <option value="1">One additional number</option>
                            <option value="2">Two additional numbers</option>
                        </select>
                    </div>

                    {/* Additional phone number inputs based on selected number */}
                    {phoneCount > 0 && (
                        <input
                            type="tel"
                            name="phonenumber2"
                            placeholder="Enter additional mobile number 1"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                    )}
                    {phoneCount > 1 && (
                        <input
                            type="tel"
                            name="phonenumber3"
                            placeholder="Enter additional mobile number 2"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                    )}
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
                    Register
                </button>
                <h6 style={{ color: 'yellow' }}>Already have an account?</h6>
                <Link 
                    to="/login" 
                    style={{ padding: '10px 20px', borderRadius: '3px', border: 'none', backgroundColor: '#007bbb', color: 'white', cursor: 'pointer' }}
                >
                    Login
                </Link>
            </form>
        </div>
    </div>
    );
}

export default Signup;
