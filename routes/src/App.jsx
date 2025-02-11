import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </Router>
    </>
  )
}

export default App;