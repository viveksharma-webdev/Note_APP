
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TextNote = () => {
  const [title, setTitle] = useState("");       
  const [content, setContent] = useState("");    
  const [image, setImage] = useState(null);      
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);  

    try {
      const response = await axios.post(
        "http://localhost:5000/api/create/notes", 
        formData,
        {
          withCredentials: true,  
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );
      console.log("Note Created:", response.data);
      navigate("/home"); 
    } catch (error) {
      console.log("Error while creating note:", error);
      alert("Failed to create note");
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);  
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="w-1/2 h-[70%] bg-white rounded-md px-5 py-3 shadow-md">
        <h1 className="text-3xl font-bold text-center">Create a New Note</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 items-start mt-3">
          <h2 className="text-2xl font-semibold mt-3">Title:</h2>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            className="rounded-full w-3/4 py-1 px-3 border-1 shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-3">Content:</h2>
          <input
            type="text"
            name="content"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)} 
            className="rounded-sm w-full h-[20vh] py-1 px-3 shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-3">Image:</h2>
          <input
            type="file"
            name="image"
            onChange={handleFileChange} 
            className="rounded-sm w-1/2 py-1 px-3 border-1 underline shadow-md"
          />
          <button className="mt-5 rounded-full bg-green-500 text-white text-lg font-medium py-1 px-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TextNote;
