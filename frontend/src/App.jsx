import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Signin from './Pages/Signin.jsx';
import Login from './Pages/Login.jsx';
import TextNote from './Pages/TextNote.jsx';
import EditNote from './Pages/EditNote.jsx';
import AudioNote from './Pages/AudioNote.jsx';


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/notes/text" element={<TextNote/>} />
        <Route exact path="/notes/audio" element={<AudioNote/>} />
        <Route exact path="/notes/:id" element={<EditNote/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
