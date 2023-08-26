import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Core from './components/core'

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route index element={<Core/>} ></Route>

  </Routes>
  </BrowserRouter>

  )
   
}

export default App;
