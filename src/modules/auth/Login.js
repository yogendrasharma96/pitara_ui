import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { loginApi } from '../utils/apis';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const userNameRef = useRef('');
  const passwordRef = useRef('');
  const [responseMsg, setResponseMsg] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginData = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value
    };

    const response = await loginApi(loginData);
    if (response.success) {
      localStorage.setItem('accessToken', response.tokens.accessToken);
      localStorage.setItem('idToken', response.tokens.idToken);
      localStorage.setItem('refreshToken', response.tokens.refreshToken);
      navigate('/add');
    } else {
      setResponseMsg(response.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300 w-96 p-4 mt-10">
      <h2 className="text-xl font-bold text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Username
          </label>
          <input
            id="username"
            type="text"
            ref={userNameRef}
            placeholder="Enter Email or Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Password
          </label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Enter Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {responseMsg && (
          <div className="mt-4 text-center">
            <h3 className="text-red-500">{responseMsg}</h3>
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;