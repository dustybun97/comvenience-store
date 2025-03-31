import { useState } from "react";
import "./App.css";
import HeaderSearch from "./components/HeaderSearch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderSearch />
    </>
  );
}

export default App;
