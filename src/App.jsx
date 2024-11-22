import { Route, Routes } from "react-router-dom";

import { Disclaimer, TellStory } from './pages'
import './App.css'

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Disclaimer />} />
      <Route path="/TellStory" element={<TellStory />} />
    </Routes>
  )
}

export default App
