import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
