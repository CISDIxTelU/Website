import { Footer, Navbar } from "./components";
import { Login, Courses, Course, DetailCourse, NotFound, Feedback, History, Question, Complete } from "./pages";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import React from "react";

function App() {
  // const location = useLocation();

  const useAuth = () => {
    let tokenLogin = localStorage.getItem('token')
    if (tokenLogin != null) {
      return true;
    }
    else {
      return false;
    }
  }

  function PrivateOutlet() {
    const auth = useAuth();
    return auth ? (<><Navbar name="users" /><Outlet /><Footer /></>) : <Navigate to="/login" />;
  }

  return (
    <div className="lg:container-lg md:mx-auto bg-gray-50">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/course/:id_topic" element={<PrivateOutlet />}>
          <Route path="" element={<Course />} />
        </Route>
        <Route path="/course/:id_topic/:id_lo/:id_course" element={<PrivateOutlet />}>
          <Route path="" element={<Course />} />
        </Route>
        <Route path="/courses" element={<PrivateOutlet />}>
          <Route path="" element={<Courses />} />
        </Route>
        <Route path="/history" element={<PrivateOutlet />}>
          <Route path="" element={<History />} />
        </Route>
        <Route path="/detail-course/:id" element={<PrivateOutlet />}>
          <Route path="" element={<DetailCourse />} />
        </Route>
        <Route path="/feedback/:id" element={<PrivateOutlet />}>
          <Route path="" element={<Feedback />} />
        </Route>
        <Route path="/question" element={<PrivateOutlet />}>
          <Route path="" element={<Question />} />
        </Route>
        <Route path="/complete" element={<PrivateOutlet />}>
          <Route path="" element={<Complete />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
