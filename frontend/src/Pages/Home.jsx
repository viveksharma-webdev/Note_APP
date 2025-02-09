import LeftPanel from '../Components/LeftPanel.jsx';
import FloatingMenu from '../Components/FloatingMenu.jsx'
import {useState, useEffect} from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  
  const[notes, setNotes] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/notes')
   .then(response=>setNotes(response.data))
   .catch(error=>console.error(error))
  },[])

  return (
    <div className="flex w-full h-full gap-4 py-4 px-4 bg-white items-center ">
      <LeftPanel/>
      <div className="w-3/4 h-full rounded-md Home-container">

         <div className='searchBar w-full flex items-center gap-3 py-2 px-3'>
           <input type="text" placeholder="Search" name="search" className="rounded-full shadow-md text-start w-[90%] py-1 px-3 "/>
           <h2 className="shadow-md rounded-full px-3 w-[10%] py-1">Sort</h2>
         </div>

         <div className="NoteContainer py-3 px-3  min-h-[85%]">
          {notes.map(note =>(   
             <div className="w-1/6 h-1/4 shadow-lg  py-3 px-3 rounded-md" key={note._id}>
               <h2 className="text-gray-500 font-light">Created At: {new Date(note.createdAt).toLocaleString()}</h2>
               <h2 className="text-lg font-medium mt-2">{note.title}</h2>
               <p className="font-thin mt-1">{note.content}</p>
  
            </div>
            ))}
         </div>

         <div className="textContainer flex justify-end items-center px-8 ">
              <FloatingMenu/>
         </div>

      </div>
    </div>
  )
}

export default Home