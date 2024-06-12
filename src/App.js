import { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);

  return (
      <div>
         
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <NavBar/>
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={12} country="in" category='general'/>} /> 
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={12} country="in" category='business'/>} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={12} country="in" category='entertainment'/>} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={12} country="in" category='health'/>} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={12} country="in" category='science'/>} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={12} country="in" category='sports'/>} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={12} country="in" category='technology'/>} />
        </Routes>
      </div>
  );
}

export default App;
