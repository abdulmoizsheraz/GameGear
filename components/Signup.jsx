import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseConfig';
import { useRouter } from 'next/router';

import "react-toastify/dist/ReactToastify.css";
const LoginSignup = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const user=  await createUserWithEmailAndPassword(email, password);
if(user){
  router.push('/');
}
      if (!error) {
        toast.success('Signup Succesfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
        setPassword('');
        setEmail('');
        setUsername('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  
  return (
    <>
    <div className="login-signup-container">
      <div className="form-container login-form-container">
        <form className="form signup-form" onSubmit={handleSubmit} method="POST">
          <h2>Sign up</h2>
          <div className="form-group">
            <input
              type="text"
              id="signup-name"
              placeholder="Name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <label htmlFor="signup-name">Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="signup-email"
              value={email}
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
              />
            <label htmlFor="signup-email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              />
            <label htmlFor="signup-password">Password</label>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
    <ToastContainer />
</>
  );
};
export default LoginSignup;