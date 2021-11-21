import { Navbar } from "./components";
import { Login, Courses, Course, DetailCourse } from "./pages";
import { Routes, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="lg:container-lg md:mx-auto">
          <Navbar />
      <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/detail-course/:id" element={<DetailCourse />} />
      </Routes>
    </div>
  );
}

export default App;
