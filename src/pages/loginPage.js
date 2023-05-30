import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import LoadingSpinner from '../components/LoadingSpinner';
import NotifyBoard from '../components/NotifyBoard';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const [user, setUser] = useState();
    const [tokens, setTokens] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [notify, setNotify] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user);

    const handleLogin = () => {
        setLoading(true)
        axios
          .post('https://dummyjson.com/auth/login', {
            username,
            password,
          })
          .then((response) => {
            console.log(response.data, user, 'response');
            if (response.data.token) {
              setTokens(response.data.token);
              setUser(response.data);
              dispatch(loginSuccess(response.data)); // Dispatch the action immediately
            }
          })
          .catch((e) => {
            setError('Username or password is incorrect ⚠️');
            console.error(error, 'error', e, 'e');
            setNotify(true);
            setTimeout(() => {
              setNotify(false)
            }, 2500);
          })
          .finally(() => {
            setLoading(false)
          })
      };
      
      useEffect(() => {
        if (tokens) {
          localStorage.setItem('token', tokens);
          setToken(tokens);
          navigate('/');
          console.log(userData, 'store');
        }
      }, [tokens, setToken, navigate, userData]);
      


  return (
   <div className="h-screen flex">
    {
      loading ?
      <LoadingSpinner /> : <div></div>
    }

    <NotifyBoard show={notify} message={error} caption={error ? 'please input the valid username and password' : null} />

     <div className="flex w-1/2 background-image i justify-around items-center m-3 rounded-lg">
       <div className='mt-12 mx-24'>
         <h1 className="text-white font-bold text-4xl font-sans">Metorada</h1>
         <p className="text-white mt-1">The stylish and responsive dashboard template built with Tailwind CSS for React. It offers a modern design, intuitive user interface, and a range of pre-designed components.</p>
         <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
       </div>
     </div>

     <div className="flex w-1/2 justify-center items-center bg-white">
       <div className="bg-white flex flex-col gap-3">
         <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
         <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
         <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
           </svg>
           <input 
            className="pl-2 outline-none border-none" 
            type="text" 
            placeholder="Email Address" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           />
         </div>
         <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
           </svg>

           <input 
            className="pl-2 outline-none border-none" 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         </div>
         <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={handleLogin}>Login</button>
         <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
       </div>
     </div>
   </div>
  );
};

export default Login;
