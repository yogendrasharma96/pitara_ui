import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { signUpApi } from '../utils/apis';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const userNameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const passwordRef = useRef('');
  const [responseMsg, setResponseMsg] = useState(null);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const signUpData = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      groupName: 'clients'
    };

    const response = await signUpApi(signUpData);
    setResponseMsg(response);

    if (response === 'Success') {
      navigate('confirm', { state: { email: emailRef.current.value } });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300  w-96 p-4 mt-10">
      <h2 className="text-xl font-bold w-48px text-center mb-4 ">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            UserName
          </label>
          <input
            id="username"
            type="text"
            ref={userNameRef}
            placeholder="Enter UserName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email
          </label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            placeholder="Enter Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phone">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Phone
          </label>
          <input
            id="phone"
            type="phone"
            ref={phoneRef}
            placeholder="Enter Phone Number"
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
            onClick={handleSignUp}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;