import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { database, auth, ref, set } from './firebase';  // Import database & auth
import './Signup.css'; // Import the CSS file

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      console.log("User created:", user);
  
      // Save user to Firebase Realtime Database
      const userRef = ref(database, 'users/' + user.uid);
      await set(userRef, {
        email: user.email,
        createdAt: new Date().toISOString(),
      });
  
      console.log("User saved to database");
      onSignup(user.email);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;