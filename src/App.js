import { Navbar } from "./components";
import { Login, Courses, Course, DetailCourse, NotFound, Favorite } from "./pages";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";

function App() {
  const location = useLocation();

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
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <div className="lg:container-lg md:mx-auto">
      {
        location.pathname === '/login' ? '' : <Navbar />
      }
      <Routes>
        {
          useAuth() === true ?
            <Route path="/courses" element={<PrivateOutlet />}>
              <Route path="" element={<Courses />} />
            </Route>
            :
            <Route path="/" element={<Navigate replace to="/login" />}/>
        }
        <Route exact path="/login" element={<Login />} />
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
        <Route path="/detail-course/:id" element={<PrivateOutlet />}>
          <Route path="" element={<DetailCourse />} />
        </Route>
        <Route path="/favorite" element={<PrivateOutlet />}>
          <Route path="" element={<Favorite />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
