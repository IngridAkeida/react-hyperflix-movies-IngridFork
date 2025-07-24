import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // You can handle success here, like redirecting to another page
      console.log('User signed up successfully:', userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
