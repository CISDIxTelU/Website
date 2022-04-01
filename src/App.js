import { Footer, Navbar } from "./components";
import { Login, Courses, Course, DetailCourse, NotFound, History, Question, Complete, Profile, QuestionDetail, QuestionGrade, LandingPage, ForgotPassword, Users, Favorite } from "./pages";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import React from "react";
import Helmet from "react-helmet";

function App() {

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
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Health Learning Platform</title>
      </Helmet>
      <div className="lg:container-lg md:mx-auto bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-option" element={<Users />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/course/:id_topic" element={<PrivateOutlet />}>
            <Route path="" element={<Course />} />
          </Route>
          <Route path="/materi" element={<PrivateOutlet />}>
            <Route path="" element={<Courses />} />
          </Route>
          <Route path="/riwayat" element={<PrivateOutlet />}>
            <Route path="" element={<History />} />
          </Route>
          <Route path="/favorit" element={<PrivateOutlet />}>
            <Route path="" element={<Favorite />} />
          </Route>
          <Route path="/detail-course/:id" element={<PrivateOutlet />}>
            <Route path="" element={<DetailCourse />} />
          </Route>
          <Route path="/question/:id/:slug" element={<PrivateOutlet />}>
            <Route path="" element={<Question />} />
          </Route>
          <Route path="/complete" element={<PrivateOutlet />}>
            <Route path="" element={<Complete />} />
          </Route>
          <Route path="/profile" element={<PrivateOutlet />}>
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="/detail-question/:id/:slug" element={<PrivateOutlet />}>
            <Route path="" element={<QuestionDetail />} />
          </Route>
          <Route path="/question/grade/:id" element={<PrivateOutlet />}>
            <Route path="" element={<QuestionGrade />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}


export default App;