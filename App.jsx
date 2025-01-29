
import Counter from "./Counter";
import Screen from "./Screen";
import React, { useState } from 'react';


function App() {
  const [num, setNum] = useState(0);

  return(
    <div>
      <Screen num={num} />
      <Counter setNum={setNum} />
    </div>
  );
}

export default App;

