import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Spinner } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Spinner color="red.500" />
    </div>
  );
}

export default App;
