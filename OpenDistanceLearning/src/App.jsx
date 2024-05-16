import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter ,
  Routes,Route,
  useNavigate,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";
// import Settings from "./pages/Settings/Settings";
import Messages from "./pages/Messages/Messages";
import Grades from "./pages/Grades/Grades";
// import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Dashboard } from "@mui/icons-material";
// import { Login } from "@mui/icons-material";
import StudentRoute from "./components/PrivateRoute/StudentRoute";
import Dashboard from "./pages/DashBoard/Dashboard";
import Profile from "./pages/Profile/Profile";
import TeacherRoute from "./components/PrivateRoute/TeacherRoute";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import AdminCourseInfo from "./pages/Admin/Course/AdminCourseInfo";
import StudentInfo from "./pages/Admin/Student/StudentInfo";
import TeacherInfo from "./pages/Admin/Teacher/TeacherInfo";
import AllCourses from "./pages/All-Courses/AllCourses";
// import NotFound from "./pages/404NotFoud/NotFound";
// import Libray from "./pages/Library/Libray";
// import Ucam from "./pages/Ucam/Ucam";

const Routing = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  console.log(localStorage.getItem("user"))
  const user = localStorage.getItem("user")||{};
 
  useEffect(() => {
    if (!user) {
      history("/login");
    } else {
      dispatch({ type: "SET__USER", payload: user });
    }
  }, []);
  return (
   <Routes>
      {/* <StudentRoute exact path="/">
        <DashBoard />
      </StudentRoute>
      <StudentRoute exact path="/library">
        <Libray />
      </StudentRoute>
      <StudentRoute exact path="/ucam">
        <Ucam />
      </StudentRoute>
      <TeacherRoute exact path="/teacher-dashboard">
        <TeacherDashboard />
      </TeacherRoute>
      <AdminRoute exact path="/admin-dashboard">
        <AdminDashboard />
      </AdminRoute>
      <AdminRoute exact path="/admin/course-info">
        <AdminCourseInfo />
      </AdminRoute>
      <AdminRoute exact path="/admin/student-info">
        <StudentInfo />
      </AdminRoute>
      <AdminRoute exact path="/admin/teacher-info">
        <TeacherInfo />
      </AdminRoute>
      <StudentRoute exact path="/messages">
        <Messages />
      </StudentRoute>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route exact path="/grades">
        <Grades />
      </Route>
      
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/all-courses">
        <AllCourses />
      </Route>
      <Route exact path="/course/:courseId">
        <CourseInfo />
      </Route>

      <Route  path="*">
        <NotFound />
      </Route> */}
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<StudentRoute/>}>
        <Route exact path="/" element={<Dashboard/>}/>
      </Route>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/grades" element={<Grades/>}/>

      <Route exact path="/messages" element={<Messages/>}/>
      <Route exact path="/all-courses" element={<AllCourses/>}/>
      <Route exact path="/teacher-dashboard" element={<TeacherRoute/>}>
        <Route exact path="/teacher-dashboard" element={<TeacherDashboard/>}/>
      </Route>
      <Route exact path="/Admin-dashboard" element={<AdminRoute/>}>
        <Route exact path="/Admin-dashboard" element={<AdminDashboard/>}/>
      </Route>
      <Route exact path="/admin/course-info" element={<AdminCourseInfo/>}/>
      <Route exact path="/course/:courseId" element={<CourseInfo/>}/>
      <Route exact path="/admin/student-info" element={<StudentInfo/>}/>
      <Route exact path="/admin/teacher-info" element={<TeacherInfo/>}/>
      
   </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
