import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios
      .post("http://localhost:5000/uploadFile", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="App">
      <input
        
        type="file"
        onChange={fileSelectedHandler}
        
      />
      {/* <button onClick={()=>this.fileInput.click()}>Pick File</button> */}
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
};

export default App;
