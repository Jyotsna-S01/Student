import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './Signup'
import Signin from './Signin'
import Student from './Student'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/student' element={<Student/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
