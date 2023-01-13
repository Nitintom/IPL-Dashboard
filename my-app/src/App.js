import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

function App() {
 
  return (
    
    <Routes>
    
    <Route  path="/" element={<Home/>} />
    <Route  path="/team-matches/:id" element={<TeamMatches/>} />
    <Route element={<NotFound/>} />
  </Routes>
  );
}


export default App;
