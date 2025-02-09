import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        { withCredentials: true } 
      );

      console.log("Login successful:", response.data);
      navigate('/home'); 

    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data || 'Invalid Credentials');
    }
  };

  return (
    <div className="Container w-full h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white w-[40vh] h-[40vh] rounded-sm py-2 px-3 flex flex-col gap-4 items-center">
        <h1 className="mb-2 mt-3 text-3xl font-bold">Login</h1>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>

          <h2 className="text-lg font-semibold">Email</h2>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-[30vh] border rounded-sm px-2 py-1/2 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h2 className="text-lg font-semibold">Password</h2>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-[30vh] border rounded-sm px-2 py-1/2 mb-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-1/2 py-2 px-4 border-[1px] border-green-400 bg-green-600 text-white text-lg rounded-md mt-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
