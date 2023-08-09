import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import FontSizeEx from "./pages/fontSizeEx";
import ToDo from "./pages/toDo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<FontSizeEx />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
