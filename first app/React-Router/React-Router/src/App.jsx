import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {

  function User(){
    console.log(useParams())
    const{ id } = useParams()
    return <h2>User Profile For ID: {id}</h2>
  }

  function NotFound(){
    return <h2>404 - Page Not found</h2>
  }

  return (
    <BrowserRouter>

      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link> <br/>
        <Link to="/about">About Us</Link><br/>
        <Link to="/contact">Contact</Link><br/>
        <Link to="/user/10">User</Link><br/>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App