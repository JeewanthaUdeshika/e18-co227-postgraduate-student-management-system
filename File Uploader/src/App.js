import "./App.css";
import DropFileInput from "./componenets/drop-file-input/DropFileInput";
function App() {
  const onFileChange = (files) => {
    console.log(files);
  };
  return (
    <div className="box">
      <h2 className="header">React Drag and Drop</h2>
      <DropFileInput onFileChange={(files) => onFileChange(files)} />
    </div>
  );
}

export default App;
