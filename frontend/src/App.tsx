

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from "./pages/Blog.tsx";
import Signup from "./pages/Signup.tsx";
import Signin from "./pages/Signin.tsx";


function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/blog/:id" element={<Blog />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
