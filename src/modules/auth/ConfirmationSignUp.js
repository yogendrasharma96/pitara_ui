import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmSignUpApi, resendConfirmationApi } from '../utils/apis';

const ConfirmationSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [responseMsg,setResponseMsg]=useState(null);
  const { email } = location.state || {};
  const confirmRef=useRef('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic to handle confirmation code submission
    const code= confirmRef.current.value;
    const response = await confirmSignUpApi({ username: email, confirmationCode:code });
    setResponseMsg(response);

    if (response === 'Success') {
      navigate('login');
    }
  };

  const handleResend = async () => {
    confirmRef.current.value='';
    const response = await resendConfirmationApi({ username: email });
    setResponseMsg(response);
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300 w-96 p-4 mt-10">
      <h2 className="text-xl font-bold text-center mb-4">Confirm Your Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="text-gray-700 text-sm mb-4">Enter the confirmation code sent to your email address: <span className="font-semibold">{email}</span></p>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirmationCode">
            Confirmation Code
          </label>
          <input
            id="confirmationCode"
            type="password"
            ref={confirmRef}
            placeholder="Enter Confirmation Code"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {responseMsg && (
          <div className="mt-4 text-center">
            <h3 className="text-red-500">{responseMsg}</h3>
            <button
              type="button"
              onClick={handleResend}
              className="text-blue-500 hover:underline mt-2"
            >
              Resend Confirmation Link
            </button>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationSignUp;