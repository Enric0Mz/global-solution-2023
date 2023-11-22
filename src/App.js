import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Routes>
      <Route
          exact
          path="/index"
          element={<Main authorized={false} />} 
        />
        <Route exact path="/" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App;
