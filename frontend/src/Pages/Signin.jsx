import {useState} from'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
   
    const handleSubmit= async(e)=>{
      e.preventDefault();
      try{
         await axios.post('http://localhost:5000/api/auth/signup',{username, password, email}).then(navigate('/home'));
      }catch(err){
        console.error('Error signing in', err);
        alert('Error signing in');
      }
    }

  return (
  <div className="Container w-full h-screen flex justify-center items-center bg-gray-400">
    <div className="bg-white w-[55vh] h-[55vh] rounded-sm py-2 px-3 flex flex-col gap-4 items-center">
     <h1 className="mb-2 mt-3 text-3xl font-bold">Sign In</h1>
     <form className=" flex flex-col gap-1" onSubmit={handleSubmit}>
       <h2 className=" text-lg font-semibold">Username</h2>
       <input type="text" name="username" placeholder="username" className="w-[30vh] border rounded-sm px-2 py-1/2" value={username} onChange={(e)=>setUsername(e.target.value)} />

       <h2 className=" text-lg font-semibold">Email</h2>
       <input type="email" name="email" placeholder="email" className="w-[30vh] border rounded-sm px-2 py-1/2 " value={email} onChange={(e)=>setEmail(e.target.value)} />

       <h2 className=" text-lg font-semibold">Password</h2>
       <input type="password" name="password" placeholder="password" className="w-[30vh] border rounded-sm px-2 py-1/2 " value={password} onChange={(e)=>setPassword(e.target.value)}/>

       <button className=" w-1/2 py-2 px-4 border-[1px] border-green-400 bg-green-600 text-white text-lg rounded-md mt-4" type="submit">Sign-In</button>
     </form>
   </div>

    </div>
  )
}

export default Signin