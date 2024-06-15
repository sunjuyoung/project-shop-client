import "./App.css";
import { useStore } from "./store.jsx";

function App() {
  const { text, bears } = useStore();
  //const text = useStore((state) => state.text);
  return (
    <div>
      <h1>text : {text}</h1>
    </div>
  );
}

export default App;
