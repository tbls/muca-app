import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl">Muca App</h1>
      <div className="my-auto pt-5">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        </div>
    </>
  );
}

export default App;
