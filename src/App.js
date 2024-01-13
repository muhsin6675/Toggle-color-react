
import { useState } from 'react';
import React from 'react';

const App = () => {
  const [color,setcolor] = useState("")
  return (
    <div >
      <div style={{backgroundColor:color,height:"100vh"}} className="w-12">
        <input type='text' value={color} onChange={(t)=>setcolor(t.target.value)}/>
      </div>
      
    </div>
  );
}

export default App;
