import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AudioNote = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleRecord() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error: ", event.error);
    };

    recognition.start();
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Store selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !text) {
      alert("Title and speech content are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", text);
    formData.append("isFavorite", false); // Default value
    if (image) {
      formData.append("image", image); // Only append image if selected
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/create/notes",
        formData, 
      );

      console.log("Note Created:", response.data);
      alert("Note created successfully!");
      navigate("/"); // Redirect after submission
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Check console for details.");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-gray-400 h-full w-full flex justify-center py-5 items-center">
        <div className="bg-white text-xl font-semibold w-1/2 h-3/4 rounded-md py-4 px-5 flex flex-col gap-5 items-start">
          <h1 className="font-thin text-3xl text-center">
            Click button for recording your Speech:
          </h1>
          <button
            className="bg-red-600 py-2 px-5 text-white rounded-full"
            onClick={handleRecord}
          >
            Record
          </button>
          <h1 className="w-full mt-2 text-2xl font-semibold">Speech: {text}</h1>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="mt-3 w-full flex flex-col items-start"
          >
            <h1 className="text-2xl font-semibold mb-2">Title :</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-full border-[1px] text-lg-black font-thin shadow-md py-1 px-3 mb-4"
              placeholder="Title"
            />

            <h1 className="text-2xl font-semibold mb-2">Image :</h1>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="rounded-sm border-1 w-1/2 shadow-md hover:underline px-3 py-1 mb-4"
            />

            <button
              type="submit"
              className="rounded-full bg-green-500 text-white text-lg font-medium px-5 py-1 mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AudioNote;
